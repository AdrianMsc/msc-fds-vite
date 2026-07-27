# MSC Fuel Design System — Agent Context

## Project Overview

React 18.3 + TypeScript design system documentation portal. Built with Vite 5.4, Redux Toolkit 2.6, Tailwind CSS 3.4, React Router 6, Auth0, and Axios. Deployed on Vercel.

## Directory Architecture

```
src/
  api/           # API service functions (one per endpoint)
  assets/        # Static images, SVGs, Lottie JSON
  components/    # Reusable UI components (design system + internal)
    atoms/       # Atomic design: Atom.tsx, Badge.tsx, etc.
    molecules/   # Atomic design: Molecule.tsx, QtyInput.tsx
    organisms/   # Atomic design: BestSellers, Slider, etc.
    pages/       # Page.tsx atomic design pattern
    templates/   # Templates.tsx
  config/        # CSP config
  context/       # React Context providers (Api, Auth, Sidebar)
  interfaces/    # TypeScript interfaces (component, activity, sidebar)
  layout/        # Layout components (Navbar, Sidebar, Footer, DocsLayout, etc.)
  lib/           # Axios instance with CSRF + auth interceptors
  pages/         # Route pages (one directory per feature)
  redux/         # Redux store, rootReducer, slices
    slices/      # 7 slices: components, currentComponent, form, toast, dialog, feedback, feedbackForm
    types/       # Redux type definitions
  router/        # React Router setup (createBrowserRouter + routeIndex)
  utils/         # Utility functions
styles/
  classes/       # 23 Tailwind plugin JS files for .msc-* component classes
  utilities/     # colors.js, icons.js, msc-index.js
```

## Tech Stack & Conventions

- **Language:** TypeScript 5.6 (strict mode), JSX
- **Framework:** React 18.3 with functional components + hooks
- **Build:** Vite 5.4 (tsc -b && vite build)
- **State:** Redux Toolkit with `createAsyncThunk` for async ops
- **Auth:** Auth0 (SPA) + backend session cookie exchange
- **HTTP:** Axios with CSRF + Bearer token interceptors
- **CSS:** Tailwind CSS 3.4 via PostCSS (no CSS-in-JS)
- **Router:** React Router DOM v6 (`createBrowserRouter`)
- **Lint:** ESLint 9 flat config + typescript-eslint
- **Format:** Prettier (100 width, single quotes, trailing commas)
- **Icons:** Font Awesome 6.7 (`@fortawesome/react-fontawesome`)

## Critical Conventions & Rules

1. **Atomic Design:** Components follow atoms/molecules/organisms/pages/templates pattern
2. **No CSS-in-JS:** All styling via Tailwind utility classes or `.msc-*` classes from `styles/classes/`
3. **No default exports** for components when possible — prefer named exports
4. **Redux slices** use `createSlice` with `createAsyncThunk`; name slices without "Reducer" suffix
5. **No `console.log` in production** — use `console.warn`/`console.error` for diagnostics only
6. **File naming:** PascalCase for components (`MscButton.tsx`), camelCase for utilities (`formatComponentName.ts`)
7. **All components** should have proper ARIA attributes (role, aria-label, etc.)
8. **All `<button>` elements** must have `type="button"` unless used as form submit
9. **Async effects** must include cleanup (AbortController or isCancelled flag)
10. **IDs in components** must be unique (use props or `useId()` hook)

## Known Tech Debt / Migration Notes

- `src/router/routeIndex.tsx` has route definitions that need refactoring (large file, ~300 lines)
- File naming typos: `Breadcumb` → `Breadcrumb`, `Pagedown` → `PageDown`, `constatns.ts` → `constants.ts`
- No testing framework installed — Vitest recommended
- `serializableCheck` in Redux store ignores `form.image` (File object) — intentional
- Sidebar uses React.Fragment to render category sections
- Modals use string-based visibility (`''` / `'hidden'`) instead of boolean
- Crear `PageLayout` wrapper reutilizable para páginas no-componente (ArchitectureFlow, GettingStarted, EcosystemPage, ChangeLog). Debe renderizar solo título + subtítulo + children, sin badge atómico, edit button, status bar, ni links de ComponentLayout. Ubicación sugerida: `src/layout/PageLayout/PageLayout.tsx`

## Development Workflow

### Backend target (local vs production)

The project supports two environments via `.env` + `.env.local`:

- `.env` — `VITE_API_TARGET=https://msc-component-status-ws-dev.vercel.app` (production Vercel backend)
- `.env.local` (gitignored) — `VITE_API_TARGET=http://localhost:4242` (local backend override)

Vite automatically merges `.env.local` on top of `.env`. Without `.env.local`, production is used.

### How the proxy works

```
axios /components → /api/components (baseURL=/api)
  → localhost:5173 (Vite dev server)
  → proxy catches /api, strips prefix
  → forwards to VITE_API_TARGET/components
  → response transparent to frontend
```

In Vercel production, `vercel.json` rewrites handle the same routing — no proxy involved.

### Commands

- `npm run dev` — dev server (respects `.env` + `.env.local`)
- `npm run build` — `tsc -b && vite build`

## After Any Changes

Run in order:
1. `npm run lint`
2. `npm run build`
3. Fix any errors before committing

## Related Config Files

- `eslint.config.js` — ESLint flat config
- `.prettierrc` — Prettier formatting
- `tailwind.config.ts` — Tailwind + plugin setup
- `vite.config.ts` — Vite + proxy + CSP
- `tsconfig.app.json` — App TS config (strict)
- `vercel.json` — Vercel deployment config
