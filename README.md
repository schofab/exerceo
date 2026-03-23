# Minis Exos — Exercices personnalisés pour les enfants du primaire

Web-app éducative qui génère 3 exercices ludiques et personnalisés grâce à l'IA Claude, selon le profil de l'enfant (âge, classe, niveau, lacunes).

## Fonctionnalités

- Inscription/connexion parent (Supabase Auth)
- Création de profils enfants (âge, classe, niveau, matières fortes/faibles)
- Formulaire de session (matières, durée, difficultés spécifiques)
- Génération de 3 exercices via Claude (QCM, calcul, texte à trous, conjugaison…)
- Interface de réponse avec correction immédiate et score final
- Paiement one-shot 29 € (Stripe) → accès Premium illimité
- **Gratuit :** 1 enfant, 3 sessions | **Premium :** illimité

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Supabase](https://supabase.com) (Auth + PostgreSQL + RLS)
- [Stripe](https://stripe.com) (paiement one-shot)
- [Claude API](https://anthropic.com) (claude-haiku-4-5)

---

## Lancement local

### 1. Prérequis

- Node.js 20+
- Compte [Supabase](https://supabase.com) (gratuit)
- Compte [Stripe](https://stripe.com) (mode test)
- Clé API [Anthropic](https://console.anthropic.com)

### 2. Installer les dépendances

```bash
npm install
```

### 3. Variables d'environnement

Copier le fichier d'exemple et renseigner les valeurs :

```bash
cp .env.local.example .env.local
```

| Variable | Où la trouver |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase > Settings > API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase > Settings > API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase > Settings > API |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |
| `STRIPE_SECRET_KEY` | Stripe Dashboard > Developers > API Keys |
| `STRIPE_WEBHOOK_SECRET` | Voir étape Stripe ci-dessous |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard > Developers > API Keys |

### 4. Configurer Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Allez dans **SQL Editor**
3. Copiez-collez le contenu de `supabase/schema.sql` et exécutez
4. Allez dans **Authentication > URL Configuration** et ajoutez `http://localhost:3000` comme URL de redirection

### 5. Configurer Stripe (webhooks locaux)

Pour recevoir les événements Stripe en local, installez [Stripe CLI](https://stripe.com/docs/stripe-cli) :

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Connecter votre compte
stripe login

# Écouter les webhooks et les rediriger vers votre app
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copiez le `webhook signing secret` affiché dans `STRIPE_WEBHOOK_SECRET`.

### 6. Lancer l'application

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
app/
  page.tsx                    ← Landing page
  (auth)/connexion/           ← Connexion
  (auth)/inscription/         ← Inscription
  (app)/tableau-de-bord/      ← Dashboard principal
  (app)/enfant/nouveau/       ← Créer un profil enfant
  (app)/enfant/[id]/          ← Modifier un profil enfant
  (app)/session/nouvelle/     ← Formulaire de session
  (app)/session/[id]/         ← Exercices + réponses
  (app)/succes/               ← Confirmation paiement
  api/generate/               ← Génération Claude (serveur)
  api/stripe/checkout/        ← Création session Stripe
  api/stripe/webhook/         ← Webhook Stripe (paiement)

components/
  ui/                         ← Button, Input, Card, Badge
  AuthForm.tsx
  EnfantForm.tsx
  SessionForm.tsx
  ExerciceCard.tsx

lib/
  types.ts                    ← Types TypeScript partagés
  supabase/client.ts          ← Client navigateur
  supabase/server.ts          ← Client serveur (cookies)
  claude.ts                   ← Appel API Claude
  stripe.ts                   ← Instance Stripe

supabase/schema.sql           ← Schéma + RLS à importer
middleware.ts                 ← Protection des routes
```

## Modèle économique

| Plan | Prix | Enfants | Sessions |
|---|---|---|---|
| Gratuit | 0 € | 1 | 3 |
| Premium | 29 € une fois | Illimité | Illimité |

## Tester le paiement Stripe

Utilisez la carte de test : `4242 4242 4242 4242` (n'importe quelle date future, n'importe quel CVC).

---

## Déploiement

Déployez sur [Vercel](https://vercel.com) en quelques clics :

1. Importez le dépôt GitHub
2. Ajoutez toutes les variables d'environnement
3. Pour les webhooks Stripe en production, créez un endpoint dans le Dashboard Stripe pointant vers `https://votre-domaine.com/api/stripe/webhook`
