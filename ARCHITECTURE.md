# Architecture

## Overview
Opinionated production AI starter. Clone, fill `YOUR_` placeholders in `.env.local`, run `supabase start`, run `npm run dev`.

## Structure

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router pages and API routes |
| `components/` | Shadcn UI + custom components |
| `lib/` | AI client, Supabase client, env validation, helpers |
| `supabase/migrations/` | All DB schema changes |
| `__tests__/` | Tests |

## Included features
- Auth (Supabase) with RLS
- AI chat with streaming (Vercel AI SDK)
- Vector search (pgvector)
- Dark mode (Tailwind + next-themes)
- Environment validation (zod)
