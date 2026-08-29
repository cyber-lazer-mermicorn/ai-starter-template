# Copilot Instructions — AI Starter Template

## Always
- Use `YOUR_` prefix for all template placeholders
- Validate env vars through `lib/env.ts`
- Use Supabase SSR client from `lib/supabase.ts`
- Use Shadcn UI components — don't reinvent buttons/inputs
- Add a migration for every schema change

## Never
- Leave `TODO` without a GitHub issue reference
- Use `any` type
- Skip RLS on new tables
- Add custom CSS when Tailwind class exists
