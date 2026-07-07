# Dev Setup — Environment & Workflow Skill

## Prerequisites

- Node.js 18+
- npm

## First Time Setup

```bash
npm install
```

The project uses two env files for API targeting:

| File | Purpose | Git |
|------|---------|-----|
| `.env` | Default config (production backend) | ✅ Committed |
| `.env.local` | Overrides for local development | ❌ Gitignored |

### Default: Production backend

`.env` already has:
```
VITE_API_TARGET=https://msc-component-status-ws-dev.vercel.app
```

Just run `npm run dev` and all API calls go through Vite's proxy to the deployed backend.

### Local backend

If you have the backend running locally, create `.env.local`:

```
VITE_API_TARGET=http://localhost:4242
```

This overrides only the target — everything else comes from `.env`.

## Available Commands

```bash
npm run dev          # Dev server with hot reload
npm run build        # TypeScript check + Vite build
npm run lint         # ESLint check
npm run preview      # Preview production build locally
```

## How the Proxy Works

```
axios.get('/components')
  → baseURL='/api' (from VITE_API_URL)
  → actual request: GET /api/components → localhost:5173/api/components
  → Vite proxy matches /api, strips /api prefix
  → forwards to VITE_API_TARGET/components
  → response comes back transparently
```

In production (Vercel), the proxy doesn't exist — `vercel.json` rewrites handle the same routing.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Yes | Backend base path (`/api` for proxy) |
| `VITE_API_TARGET` | Yes | Where the proxy forwards requests |
| `VITE_AUTH0_DOMAIN` | Yes | Auth0 tenant domain |
| `VITE_AUTH0_CLIENT_ID` | Yes | Auth0 SPA client ID |
| `VITE_AUTH0_AUDIENCE` | Yes | Auth0 API identifier |

## Troubleshooting

### ECONNREFUSED on startup
- If running against local backend: verify the backend is running on port 4242
- If running against production: check that `VITE_API_TARGET` is set in `.env`

### CORS errors in browser
- Make sure `VITE_API_URL=/api` (uses proxy, avoids CORS)
- If using a direct URL, backend must allow CORS from `localhost:5173`

### Auth0 login redirects to localhost in production
- Verify Auth0 Application settings include both `http://localhost:5173` and the production URL in "Allowed Callback URLs"
