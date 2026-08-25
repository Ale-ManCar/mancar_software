create table if not exists public.lead_requests (
  id text primary key,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'pending',
  notification_status text not null default 'pending',
  name text not null,
  email text not null,
  phone text not null,
  project_type text not null,
  message text not null,
  source text not null,
  request_hash text not null,
  consent_accepted_at timestamptz not null,
  constraint lead_requests_status_check check (status in ('pending', 'contacted', 'qualified', 'closed', 'archived')),
  constraint lead_requests_notification_status_check check (notification_status in ('pending', 'sent', 'failed', 'skipped'))
);

create index if not exists lead_requests_created_at_idx on public.lead_requests (created_at desc);
create index if not exists lead_requests_request_hash_idx on public.lead_requests (request_hash);

alter table public.lead_requests enable row level security;

create table if not exists public.lead_rate_limits (
  key text primary key,
  window_start bigint not null,
  attempts integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.lead_rate_limits enable row level security;

create or replace function public.consume_lead_rate_limit(
  p_key text,
  p_window_start bigint,
  p_max_attempts integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_record public.lead_rate_limits%rowtype;
begin
  select * into current_record
  from public.lead_rate_limits
  where key = p_key
  for update;

  if not found then
    insert into public.lead_rate_limits(key, window_start, attempts)
    values (p_key, p_window_start, 1);
    return true;
  end if;

  if current_record.window_start <> p_window_start then
    update public.lead_rate_limits
    set window_start = p_window_start,
        attempts = 1,
        updated_at = now()
    where key = p_key;
    return true;
  end if;

  if current_record.attempts >= p_max_attempts then
    return false;
  end if;

  update public.lead_rate_limits
  set attempts = attempts + 1,
      updated_at = now()
  where key = p_key;
  return true;
end;
$$;
