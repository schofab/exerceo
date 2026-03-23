-- ============================================================
-- Créatures — Catalogue et déverrouillages par enfant
-- À exécuter dans Supabase Studio > SQL Editor > New query
-- ============================================================

-- Catalogue des créatures (immuable depuis le code)
create table if not exists public.creatures (
  id             uuid primary key default gen_random_uuid(),
  name           text not null unique,
  subject        text not null check (subject in (
                   'Mathématiques','Français','Sciences',
                   'Histoire-Géographie','Anglais')),
  stars_required int  not null check (stars_required > 0),
  description    text not null default '',
  emoji          text not null default '🐾',
  created_at     timestamptz not null default now()
);

-- Déverrouillages par enfant
create table if not exists public.enfant_creatures (
  id          uuid primary key default gen_random_uuid(),
  enfant_id   uuid not null references public.enfants(id) on delete cascade,
  creature_id uuid not null references public.creatures(id) on delete cascade,
  unlocked_at timestamptz not null default now(),
  unique (enfant_id, creature_id)
);

-- ── Seed : 10 créatures ──────────────────────────────────────

insert into public.creatures (name, subject, stars_required, description, emoji) values
  ('Calculou',  'Mathématiques',       10,  'Un petit génie des chiffres !',        '🔢'),
  ('Lecturo',   'Français',            20,  'Il dévore les livres !',               '📖'),
  ('Curio',     'Sciences',            35,  'Toujours curieux d''explorer !',        '🔬'),
  ('Géomio',    'Mathématiques',       50,  'Expert des formes et des angles !',    '📐'),
  ('Grammou',   'Français',            70,  'Champion de l''orthographe !',          '✏️'),
  ('Chrono',    'Histoire-Géographie', 90,  'Voyageur du temps et de l''espace !',   '🏺'),
  ('Astroli',   'Sciences',           120,  'Explorateur des étoiles !',            '🚀'),
  ('Terria',    'Histoire-Géographie',150,  'Connaît chaque recoin du monde !',     '🌍'),
  ('Wordy',     'Anglais',            200,  'Parle anglais comme un champion !',    '💬'),
  ('Spellia',   'Anglais',            250,  'Maître des mots en anglais !',         '🦄')
on conflict (name) do nothing;

-- ── RLS ─────────────────────────────────────────────────────

alter table public.creatures        enable row level security;
alter table public.enfant_creatures enable row level security;

-- Creatures : lecture pour tous les utilisateurs authentifiés
create policy "creatures: lecture" on public.creatures
  for select using (auth.role() = 'authenticated');

-- Enfant_creatures : lecture — parent voit les créatures de ses enfants
create policy "enfant_creatures: lecture" on public.enfant_creatures
  for select using (
    exists (
      select 1 from public.enfants e
      where e.id = enfant_creatures.enfant_id
        and e.parent_id = auth.uid()
    )
  );

-- Enfant_creatures : insertion — parent insère pour ses enfants uniquement
create policy "enfant_creatures: insertion" on public.enfant_creatures
  for insert with check (
    exists (
      select 1 from public.enfants e
      where e.id = enfant_creatures.enfant_id
        and e.parent_id = auth.uid()
    )
  );

-- ── Fonction RPC : compte les étoiles d'un enfant ───────────
-- 1 étoile = 1 exercice réussi (est_correct = true)
-- Idempotent : basé sur l'état final via UPSERT (reponses a 1 ligne par exercice)

create or replace function public.get_etoiles_enfant(p_enfant_id uuid)
returns bigint
language sql
security definer
stable
as $$
  select count(distinct r.exercice_id)
  from public.reponses r
  join public.exercices ex on ex.id = r.exercice_id
  join public.sessions s   on s.id  = ex.session_id
  where s.enfant_id = p_enfant_id
    and r.est_correct = true;
$$;
