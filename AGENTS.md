# AI Starter Template — Agent Doctrine

## What this repo is
Opinionated production-ready AI application starter: Next.js 15, Supabase, OpenAI/Anthropic, Vercel, TypeScript strict, Shadcn UI, Tailwind.
By Cherry Shanaley (Chan), AI Solutions Engineer.

## Tech stack
- Next.js 15 App Router, TypeScript strict, Supabase, Vercel AI SDK, Shadcn UI, Tailwind CSS

## Coding rules
- This is a template — all placeholder values use `YOUR_` prefix (e.g., `YOUR_APP_NAME`)
- Env vars validated at startup in `lib/env.ts` via zod
- AI client is a singleton in `lib/ai.ts` — supports OpenAI and Anthropic via provider config
- Auth via Supabase — RLS enabled on all tables
- Components in `components/` — Shadcn UI base, no custom CSS unless Tailwind class won't cover it
- No `any` types, no empty catch blocks, no placeholder `TODO` that isn't tracked

## Scaffolding a new feature
1. Add route in `app/`
2. Add lib functions in `lib/`
3. Add Supabase migration in `supabase/migrations/`
4. Add tests in `__tests__/`
5. Update `README.md`

## Commands
```bash
npm install
cp .env.example .env.local  # fill in YOUR_ placeholders
supabase start
npm run dev
npm run test
```
