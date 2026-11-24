# Nuxt 3 Enterprise Blueprint

This repository contains a minimal, production‑ready scaffold for a multi‑tenant Nuxt 3 application.

## Features
- Layered folder structure (`layers/`, `server/api/`, `composables/`, `stores/`, `middleware/`)
- Typed Nitro server routes with Zod validation
- Pinia state management with JWT placeholder authentication
- Ready for Docker, Cloudflare Workers, or Vercel deployment
- Vitest test suite stub (`test/` folder can be added)

## Getting Started
```bash
npm install
npm run dev
```