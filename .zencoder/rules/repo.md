# Tourosphere Monorepo Info

## Structure
- apps/web: Next.js website (to be scaffolded)
- apps/mobile: React Native (Expo) app (to be scaffolded)
- apps/api: Node.js API (Express) (to be scaffolded)
- packages/db: Prisma schema and database access
- packages/ui: Shared UI components and Tailwind/shadcn presets (to be scaffolded)
- packages/ai: AI utilities (OpenAI integration) (to be scaffolded)

## Package Manager
- npm workspaces (root-managed)

## Build System
- Turborepo for task orchestration across apps and packages

## Environment
- Root .env will include DATABASE_URL for Prisma and shared secrets

## Notes
- Database target in project brief: PostgreSQL
- Pending confirmations: auth providers, local DB setup method, map provider keys, and chatbot provider configuration