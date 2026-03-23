-- ============================================================
-- Minis Exos — Schéma Supabase
-- À exécuter dans Supabase Studio > SQL Editor
-- ============================================================

-- 1. Table profiles (étend auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  is_premium boolean not null default false,
  sessions_used int not null default 0,
  created_at timestamptz not null default now()
);

-- Trigger : créer un profil automatiquement lors de l'inscription
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Table enfants
create table if not exists public.enfants (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.profiles(id) on delete cascade,
  prenom text not null,
  age int not null check (age between 5 and 12),
  classe text not null check (classe in ('CP', 'CE1', 'CE2', 'CM1', 'CM2')),
  niveau text not null check (niveau in ('debutant', 'intermediaire', 'avance')),
  facilites text[] not null default '{}',
  lacunes text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- 3. Table sessions
create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.profiles(id) on delete cascade,
  enfant_id uuid not null references public.enfants(id) on delete cascade,
  temps_disponible int not null check (temps_disponible > 0),
  matieres text[] not null default '{}',
  difficultes text not null default '',
  created_at timestamptz not null default now()
);

-- 4. Table exercices
create table if not exists public.exercices (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  ordre int not null check (ordre between 1 and 20),
  matiere text not null,
  type text not null check (type in ('calcul', 'qcm', 'texte_a_trous', 'vrai_faux', 'conjugaison')),
  contenu jsonb not null,
  reponse_correcte text not null,
  created_at timestamptz not null default now()
);

-- 5. Table reponses
create table if not exists public.reponses (
  id uuid primary key default gen_random_uuid(),
  exercice_id uuid not null references public.exercices(id) on delete cascade,
  reponse_donnee text not null default '',
  est_correct boolean not null default false,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security (RLS)
-- ============================================================

alter table public.profiles enable row level security;
alter table public.enfants enable row level security;
alter table public.sessions enable row level security;
alter table public.exercices enable row level security;
alter table public.reponses enable row level security;

-- Profiles : un utilisateur voit uniquement son propre profil
create policy "profiles: lecture propre" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles: modification propre" on public.profiles
  for update using (auth.uid() = id);

-- Enfants : le parent voit et gère ses propres enfants
create policy "enfants: lecture parent" on public.enfants
  for select using (auth.uid() = parent_id);

create policy "enfants: insertion parent" on public.enfants
  for insert with check (auth.uid() = parent_id);

create policy "enfants: modification parent" on public.enfants
  for update using (auth.uid() = parent_id);

create policy "enfants: suppression parent" on public.enfants
  for delete using (auth.uid() = parent_id);

-- Sessions : le parent voit ses propres sessions
create policy "sessions: lecture parent" on public.sessions
  for select using (auth.uid() = parent_id);

create policy "sessions: insertion parent" on public.sessions
  for insert with check (auth.uid() = parent_id);

-- Exercices : accessibles via les sessions du parent
create policy "exercices: lecture parent" on public.exercices
  for select using (
    exists (
      select 1 from public.sessions s
      where s.id = exercices.session_id
        and s.parent_id = auth.uid()
    )
  );

create policy "exercices: insertion parent" on public.exercices
  for insert with check (
    exists (
      select 1 from public.sessions s
      where s.id = exercices.session_id
        and s.parent_id = auth.uid()
    )
  );

-- Réponses : accessibles via les exercices du parent
create policy "reponses: lecture parent" on public.reponses
  for select using (
    exists (
      select 1 from public.exercices ex
      join public.sessions s on s.id = ex.session_id
      where ex.id = reponses.exercice_id
        and s.parent_id = auth.uid()
    )
  );

create policy "reponses: insertion ou mise à jour parent" on public.reponses
  for all using (
    exists (
      select 1 from public.exercices ex
      join public.sessions s on s.id = ex.session_id
      where ex.id = reponses.exercice_id
        and s.parent_id = auth.uid()
    )
  );
