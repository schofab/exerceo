import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { upsertEnfantCompetenceAfterAnswer } from "@/lib/competences/service";
import type { CompetenceUpdateInput } from "@/lib/competences/types";

function isValidRecentResults(value: unknown): value is boolean[] {
  return Array.isArray(value) && value.every((item) => typeof item === "boolean");
}

function normalizeBody(input: unknown): CompetenceUpdateInput | null {
  if (!input || typeof input !== "object") return null;

  const body = input as Record<string, unknown>;

  if (
    typeof body.enfant_id !== "string" ||
    typeof body.skill_id !== "string" ||
    typeof body.skill_label !== "string" ||
    typeof body.matiere !== "string"
  ) {
    return null;
  }

  if (
    "was_correct" in body &&
    typeof body.was_correct !== "boolean"
  ) {
    return null;
  }

  if (
    "recent_results" in body &&
    !isValidRecentResults(body.recent_results)
  ) {
    return null;
  }

  return body as unknown as CompetenceUpdateInput;
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let rawBody: unknown;

  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const body = normalizeBody(rawBody);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 422 }
    );
  }

  const { data: enfant, error: enfantError } = await supabase
    .from("enfants")
    .select("id")
    .eq("id", body.enfant_id)
    .eq("parent_id", user.id)
    .single();

  if (enfantError) {
    if (enfantError.code === "PGRST116") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(
      { error: "Failed to verify child ownership" },
      { status: 500 }
    );
  }

  if (!enfant) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await upsertEnfantCompetenceAfterAnswer(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("competences/update POST failed", error);

    return NextResponse.json(
      { error: "Failed to update competence" },
      { status: 500 }
    );
  }
}