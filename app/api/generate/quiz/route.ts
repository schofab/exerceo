import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: Request) {
  // Auth requise (quiz consomme des tokens API)
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

  let matiere: string, classe: string;
  try {
    ({ matiere, classe } = await request.json());
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  const systemPrompt = `Tu es un générateur de quiz éducatifs pour enfants du primaire français.
Tu génères des questions adaptées à l'âge et au niveau scolaire.
Réponds UNIQUEMENT avec du JSON valide, sans texte autour.`;

  const userPrompt = `Génère exactement 3 questions de quiz pour un élève de ${classe} en ${matiere}.

Format JSON strict (rien d'autre) :
{
  "questions": [
    {
      "enonce": "Question claire et adaptée au niveau ${classe} ?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "reponse_correcte": "Option A",
      "explication": "Explication courte et pédagogique."
    }
  ]
}

Règles absolues :
- 3 questions exactement
- 4 options par question (A, B, C, D)
- 1 seule bonne réponse par question
- Questions adaptées au niveau ${classe} en ${matiere}
- reponse_correcte doit être la valeur exacte de l'une des options
- Explication courte (1-2 phrases max)`;

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("JSON introuvable dans la réponse");

    const data = JSON.parse(jsonMatch[0]);
    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error("Format de réponse invalide");
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Erreur quiz:", err);
    return NextResponse.json({ error: "Erreur lors de la génération du quiz" }, { status: 500 });
  }
}
