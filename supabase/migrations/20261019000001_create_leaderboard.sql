-- SmartCare: public leaderboard (top achievers) for Megacode, Prometric and
-- course exams. Mirrors docs/SUPABASE_SETUP.md §5. Idempotent like the other
-- migrations, so `supabase db push` is safe to re-run.
--
-- Shape: one public display name per player, and one row per (player, test)
-- holding that player's BEST published score. Anyone (guests included) can
-- read the board; nobody writes the tables directly — writes go through the
-- SECURITY DEFINER functions below, which validate input and only ever raise
-- a score, never lower it.

create table if not exists public.leaderboard_players (
  user_id      uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 32),
  updated_at   timestamptz not null default now()
);

create table if not exists public.leaderboard_scores (
  user_id     uuid not null references public.leaderboard_players (user_id) on delete cascade,
  section     text not null check (section in ('megacode', 'prometric', 'courses')),
  test_id     text not null check (test_id ~ '^[a-z0-9][a-z0-9-]{0,63}$'),
  test_label  text not null check (char_length(test_label) between 1 and 80),
  -- Only high scores make the board: 85% and above.
  score       smallint not null check (score between 85 and 100),
  questions   smallint check (questions is null or questions between 1 and 1000),
  achieved_at timestamptz not null default now(),
  primary key (user_id, section, test_id)
);

create index if not exists leaderboard_scores_rank_idx
  on public.leaderboard_scores (section, score desc, achieved_at);

alter table public.leaderboard_players enable row level security;
alter table public.leaderboard_scores  enable row level security;

-- The board is public: guests (anon) and signed-in users can read it.
-- No insert/update/delete grants — see the functions below.
grant usage on schema public to anon, authenticated;
grant select on public.leaderboard_players to anon, authenticated;
grant select on public.leaderboard_scores  to anon, authenticated;

drop policy if exists "leaderboard players - public read" on public.leaderboard_players;
create policy "leaderboard players - public read" on public.leaderboard_players
  for select using (true);

drop policy if exists "leaderboard scores - public read" on public.leaderboard_scores;
create policy "leaderboard scores - public read" on public.leaderboard_scores
  for select using (true);

-- Publish a high score for the calling user. Returns true if it became the
-- user's new best for that test, false if an equal-or-better one is already
-- on the board (the display name is still updated either way).
create or replace function public.submit_high_score(
  p_section      text,
  p_test_id      text,
  p_test_label   text,
  p_score        integer,
  p_questions    integer,
  p_display_name text
)
returns boolean
language plpgsql
security definer set search_path = public
as $$
declare
  uid     uuid := auth.uid();
  v_name  text := btrim(regexp_replace(coalesce(p_display_name, ''), '[[:cntrl:]]', '', 'g'));
  v_label text := btrim(regexp_replace(coalesce(p_test_label, ''), '[[:cntrl:]]', '', 'g'));
  v_rows  integer;
begin
  if uid is null then
    raise exception 'Sign in to publish a score' using errcode = '42501';
  end if;
  if char_length(v_name) < 2 then
    raise exception 'Display name must be at least 2 characters' using errcode = '22023';
  end if;
  if p_score is null or p_score < 85 or p_score > 100 then
    raise exception 'Only scores of 85%% or higher make the leaderboard' using errcode = '22023';
  end if;
  -- Exams must be a real sitting, not a 10-question warm-up.
  if p_section in ('prometric', 'courses') and coalesce(p_questions, 0) < 20 then
    raise exception 'Exams need at least 20 questions to count' using errcode = '22023';
  end if;
  -- Test ids follow the client's naming per section (see pages/high-score.js).
  if not (
       (p_section = 'megacode'  and p_test_id ~ '^mc-(exam|quick)-[0-9]{1,3}$')
    or (p_section = 'prometric' and p_test_id ~ '^prometric-(all|paramedic|emt)$')
    or (p_section = 'courses'   and p_test_id ~ '^[a-z]{2,12}-[a-z0-9-]{1,50}$')
  ) then
    raise exception 'Unknown test' using errcode = '22023';
  end if;
  -- Cap rows per player so a script can't flood the board with made-up tests.
  if (select count(*) from public.leaderboard_scores where user_id = uid) >= 100
     and not exists (select 1 from public.leaderboard_scores
                     where user_id = uid and section = p_section and test_id = p_test_id) then
    raise exception 'Too many leaderboard entries' using errcode = '22023';
  end if;

  insert into public.leaderboard_players (user_id, display_name)
  values (uid, left(v_name, 32))
  on conflict (user_id) do update
    set display_name = excluded.display_name, updated_at = now();

  insert into public.leaderboard_scores (user_id, section, test_id, test_label, score, questions)
  values (uid, p_section, p_test_id, left(coalesce(nullif(v_label, ''), p_test_id), 80), p_score, p_questions)
  on conflict (user_id, section, test_id) do update
    set score = excluded.score,
        test_label = excluded.test_label,
        questions = excluded.questions,
        achieved_at = now()
    where public.leaderboard_scores.score < excluded.score;

  get diagnostics v_rows = row_count;
  return v_rows > 0;
end;
$$;

-- Change the calling user's public display name.
create or replace function public.set_leaderboard_name(p_display_name text)
returns void
language plpgsql
security definer set search_path = public
as $$
declare
  uid    uuid := auth.uid();
  v_name text := btrim(regexp_replace(coalesce(p_display_name, ''), '[[:cntrl:]]', '', 'g'));
begin
  if uid is null then
    raise exception 'Not signed in' using errcode = '42501';
  end if;
  if char_length(v_name) < 2 then
    raise exception 'Display name must be at least 2 characters' using errcode = '22023';
  end if;
  update public.leaderboard_players
     set display_name = left(v_name, 32), updated_at = now()
   where user_id = uid;
end;
$$;

-- Remove the calling user (and all their scores) from the board.
create or replace function public.leave_leaderboard()
returns void
language plpgsql
security definer set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Not signed in' using errcode = '42501';
  end if;
  delete from public.leaderboard_players where user_id = auth.uid();
end;
$$;

revoke all on function public.submit_high_score(text, text, text, integer, integer, text) from public, anon;
revoke all on function public.set_leaderboard_name(text) from public, anon;
revoke all on function public.leave_leaderboard() from public, anon;
grant execute on function public.submit_high_score(text, text, text, integer, integer, text) to authenticated;
grant execute on function public.set_leaderboard_name(text) to authenticated;
grant execute on function public.leave_leaderboard() to authenticated;
