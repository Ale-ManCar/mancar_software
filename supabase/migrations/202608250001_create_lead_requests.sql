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
