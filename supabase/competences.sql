-- Compétences par enfant — suivi de maîtrise par skill
-- skill_id = "{matiere_normalized}:{sous_domaine}", e.g. "francais:orthographe"
-- recent_results = tableau JSONB des 5 derniers résultats booléens
-- review_stage = étape de réactivation espacée (0 -> 7j, 1 -> 14j, 2 -> 30j)

create table if not exists public.enfant_competences (
  id               uuid primary key default gen_random_uuid(),
  enfant_id        uuid not null references public.enfants(id) on delete cascade,
  matiere          text not null,
  skill_id         text not null,
  skill_label      text not null,
  attempts_total   int not null default 0,
  correct_total    int not null default 0,
  recent_results   jsonb not null default '[]'::jsonb,
  mastery_score    numeric(5,2) not null default 0,
  status           text not null default 'not_started'
    check (status in ('not_started', 'fragile', 'progressing', 'mastered')),
  review_stage     int null default null,
  last_seen_at     timestamptz null,
  next_review_at   timestamptz null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  constraint enfant_competences_unique unique (enfant_id, skill_id),
  constraint enfant_competences_review_stage_check
    check (review_stage is null or review_stage between 0 and 2)
);

-- Compat migration: ajoute la colonne si la table existe déjà sans review_stage
alter table public.enfant_competences
  add column if not exists review_stage int null default null;

alter table public.enfant_competences
  drop constraint if exists enfant_competences_review_stage_check;

alter table public.enfant_competences
  add constraint enfant_competences_review_stage_check
  check (review_stage is null or review_stage between 0 and 2);

-- Index pour les lectures fréquentes
create index if not exists idx_enfant_competences_enfant_id
  on public.enfant_competences (enfant_id);

create index if not exists idx_enfant_competences_status
  on public.enfant_competences (enfant_id, status);

create index if not exists idx_enfant_competences_review
  on public.enfant_competences (enfant_id, next_review_at)
  where next_review_at is not null;

-- Mise à jour automatique de updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists enfant_competences_updated_at on public.enfant_competences;

create trigger enfant_competences_updated_at
before update on public.enfant_competences
for each row execute function public.set_updated_at();

-- RLS
alter table public.enfant_competences enable row level security;

drop policy if exists "parent_select_competences" on public.enfant_competences;
create policy "parent_select_competences"
on public.enfant_competences
for select
using (
  exists (
    select 1
    from public.enfants e
    where e.id = enfant_id
      and e.parent_id = auth.uid()
  )
);

drop policy if exists "parent_insert_competences" on public.enfant_competences;
create policy "parent_insert_competences"
on public.enfant_competences
for insert
with check (
  exists (
    select 1
    from public.enfants e
    where e.id = enfant_id
      and e.parent_id = auth.uid()
  )
);

drop policy if exists "parent_update_competences" on public.enfant_competences;
create policy "parent_update_competences"
on public.enfant_competences
for update
using (
  exists (
    select 1
    from public.enfants e
    where e.id = enfant_id
      and e.parent_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.enfants e
    where e.id = enfant_id
      and e.parent_id = auth.uid()
  )
);