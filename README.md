# ✨ Fuel Design System: Ignite Your Product Experience

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.6-764ABC?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-2.2-EB5424?logo=auth0&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

---

## Overview

**Fuel Design System** is a modern, responsive design system portal that powers the company's product suite. It provides a centralized platform to track, update, and analyze the status of UI components across guidelines, Figma, Storybook, and CDN.

**Key features:**

- Browse components by atomic design categories (atoms, molecules, organisms, pages, templates)
- Create, update, and delete component records
- Track component statuses across platforms
- View change history (admin-only)
- Component testing playground
- Color palettes, spacing guides, shadows, and typography reference

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3 with functional components + hooks |
| **Language** | TypeScript 5.6 (strict mode) |
| **Build** | Vite 5.4 (`tsc -b && vite build`) |
| **State** | Redux Toolkit 2.6 (`createAsyncThunk`) |
| **Auth** | Auth0 SPA + backend session cookie exchange |
| **HTTP** | Axios 1.7 with CSRF + Bearer interceptors |
| **CSS** | Tailwind CSS 3.4 via PostCSS (no CSS-in-JS) |
| **Router** | React Router DOM v6 (`createBrowserRouter`) |
| **Icons** | Font Awesome 6.7 |
| **Lint** | ESLint 9 (flat config) + typescript-eslint |
| **Format** | Prettier (100 width, single quotes, trailing commas) |
| **Deploy** | Vercel |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **npm**

### Installation

```bash
git clone <repo-url>
cd msc-fds-vite
npm install
```

### Backend Setup

The app needs a backend API. You can use either **production** (Vercel) or **local**.

#### Production backend (default)

No extra setup needed. `.env` already points to the deployed backend:

```
VITE_API_TARGET=https://msc-component-status-ws-dev.vercel.app
```

#### Local backend (override)

If you run the backend locally, create `.env.local` (gitignored):

```
VITE_API_TARGET=http://localhost:4242
```

Vite automatically merges `.env.local` on top of `.env`, overriding only `VITE_API_TARGET`.

### Start Dev Server

```bash
npm run dev
```

The app opens at [http://localhost:5173](http://localhost:5173).

---

## How the Proxy Works

```
axios.get('/components')
  → baseURL='/api' (from VITE_API_URL)
  → request: GET /api/components → localhost:5173/api/components
  → Vite proxy matches /api, strips /api prefix
  → forwards to VITE_API_TARGET/components
  → response returns transparently to frontend
```

In production (Vercel), `vercel.json` rewrites handle the same routing — no Vite proxy involved.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | TypeScript check (`tsc -b`) + production build |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build locally |
| `npm run tw-build` | Watch and build Tailwind CSS (main) |
| `npm run tw-build:cdn` | Watch and build Tailwind CSS (CDN) |

---

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `VITE_API_URL` | Yes | `/api` | Backend base path (must be `/api` for proxy) |
| `VITE_API_TARGET` | Yes | (none) | Proxy target URL (production or local) |
| `VITE_AUTH0_DOMAIN` | Yes | — | Auth0 tenant domain |
| `VITE_AUTH0_CLIENT_ID` | Yes | — | Auth0 SPA client ID |
| `VITE_AUTH0_AUDIENCE` | Yes | — | Auth0 API identifier |

---

## Architecture

### Atomic Design

Components follow the atomic design hierarchy:

```
src/components/
  atoms/       → Atom.tsx, Badge.tsx, Rating.tsx
  molecules/   → Molecule.tsx, QtyInput.tsx
  organisms/   → BestSellers, Slider, SpecificationsTable
  pages/       → Page.tsx
  templates/   → Templates.tsx
  (flat)       → MscButton, MscInput, MscModal, MscTabs, etc.
```

### Directory Layout

```
src/
  api/          # API service functions
  components/   # Reusable UI components
  config/       # CSP configuration
  context/      # React Context providers (Auth, Api, Sidebar)
  interfaces/   # TypeScript interfaces
  layout/       # Layout components (Navbar, Sidebar, Footer)
  lib/          # Axios instance + interceptors
  pages/        # Route pages (one directory per feature)
  redux/        # Store, slices, types
  router/       # Route definitions
  utils/        # Utility functions
styles/
  classes/      # Tailwind plugin .msc-* classes
  utilities/    # Colors, icons
```

---

## Component Versioning

- Create new versions via the "Is this a new version?" checkbox in the creation modal
- Version selector on component detail pages allows switching between versions
- Version format: semantic (e.g., `1.0.0`, `2.0.0`)

---

## Component History (Admin)

- Route: `/docs/ComponentHistory`
- Visibility: users with `role === 'admin'`
- Source: `GET /components/history`
- Filtering by action, component, date range

---

## Support

If you encounter issues, reach out to the development team or open an issue in the repository.
