# Tourosphere

Monorepo powered by Turborepo with apps for web, mobile, and API, plus shared packages for DB, UI, and AI.

## Workspaces
- apps/web: Next.js 14 + TailwindCSS
- apps/mobile: Expo + NativeWind
- apps/api: Express + Prisma
- packages/db: Prisma schema and client
- packages/ui: Shared UI components
- packages/ai: OpenAI helper

## Quickstart
1. Copy .env.example to .env and fill variables
2. Start services: `docker compose up -d`
3. Install deps: `npm install`
4. Generate prisma client: `npm run -w packages/db generate`
5. Run dev: `npm run dev`