-- Migration : feedback post-correction sur les exercices
--
-- Signal pédagogique laissé par le parent après validation d'un exercice.
-- Rattaché à l'occurrence Supabase (exercice_id) ET à l'identifiant éditorial
-- stable (bank_id) pour permettre l'agrégation transversale par item de banque.
--
-- Signaux :
--   deja_vu         → item déjà mémorisé, recyclage perçu
--   pas_encore_vu   → notion probablement pas encore abordée en classe (alerte pédagogique)
--   trop_facile     → item sous le niveau réel de l'enfant
--   trop_difficile  → item au-dessus du niveau réel de l'enfant

create table if not exists public.exercise_feedbacks (
  id uuid primary key default gen_random_uuid(),
  exercise_id uuid not null references public.exercices(id) on delete cascade,
  enfant_id uuid not null references public.enfants(id) on delete cascade,
  bank_id text,
  signal text not null check (
    signal in ('deja_vu', 'pas_encore_vu', 'trop_facile', 'trop_difficile')
  ),
  created_at timestamptz not null default now()
);

create unique index if not exists exercise_feedbacks_exercise_enfant_unique
on public.exercise_feedbacks (exercise_id, enfant_id);

alter table public.exercise_feedbacks
  enable row level security;

create policy "feedbacks: lecture parent"
on public.exercise_feedbacks
for select
to authenticated
using (
  exists (
    select 1
    from public.enfants e
    where e.id = exercise_feedbacks.enfant_id
      and e.parent_id = auth.uid()
  )
);

create policy "feedbacks: insertion parent"
on public.exercise_feedbacks
for insert
to authenticated
with check (
  exists (
    select 1
    from public.enfants e
    where e.id = exercise_feedbacks.enfant_id
      and e.parent_id = auth.uid()
  )
);