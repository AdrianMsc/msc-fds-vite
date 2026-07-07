# MSC Fuel Design System — Improvement Roadmap

> Generated from code quality audit. See AGENTS.md for project context.

---

## ✅ Phase 1 — Stability (Completed)

- [x] Create `ErrorBoundary` component and wrap app in `src/main.tsx`
- [x] Create `.env.example` (`.env` already gitignored)
- [x] Fix `errorElement: 'error'` string → `<MscErrorPage />` in routeIndex.tsx
- [x] Fix duplicate `index: true` routes (Notifications + GettingStarted)
- [x] Fix `serializableCheck: false` → targeted ignore for `form.image`
- [x] Add AbortController cleanup in `ApiContext.tsx` and `ComponentLayout.tsx`
- [x] Add `setTimeout` cleanup in `ModalForm.tsx` and `ModalFeedback.tsx`
- [x] Remove debug `console.log(renderCategorySection())` from `Sidebar.tsx`

---

## 🟠 Phase 2 — Code Quality

- [ ] **Testing:** Install Vitest + @testing-library/react, write tests for critical flows:
  - Auth flow (AuthContext)
  - Component CRUD (componentsSlice)
  - Modal rendering and form submission
- [ ] **Loading/Error states:** Add `loading` and `error` fields to Redux slices; expose to consumers
- [ ] **Type safety:** Remove `as unknown` casts in `ModalForm.tsx:136` and `ModalFeedback.tsx:68`
- [ ] **Type errors:** Create proper typed error handling in async thunks (replace `error as { response?: { data?: unknown } }`)
- [ ] **Replace `any`:** Audit and remove implicit `any` types across the codebase
- [ ] **FormSlice type:** Extract shared type instead of `as unknown as IComponentForm`

---

## 🟡 Phase 3 — Architecture

### Routing
- [ ] **Refactor `routeIndex.tsx`:** Split into smaller files (e.g., `layout.routes.ts`, `organism.routes.ts`, `protected.routes.ts`)
- [ ] **Standardize route paths:** Use kebab-case consistently (`/docs/getting-started` vs `/docs/GettingStarted`)

### State Management
- [ ] **Redux cleanup:** Remove unused `redux-persist` dependency from `package.json`
- [ ] **Rename slices:** `componentsReducer` → `components`, `feedbackReducer` → `feedback`
- [ ] **CurrentComponent init:** Change `id: 0` to `null` for proper "no selection" state

### API Layer
- [ ] **Move hardcoded paths:** Extract `/auth/*`, `/csrf-token` to constants/config
- [ ] **Dev/prod parity:** Fix proxy path mismatch (Vite strips `/api`, production keeps it)
- [ ] **CSRF error handling:** Improve graceful degradation when CSRF fetch fails

---

## 🔵 Phase 4 — Naming & File Organization

- [ ] **Rename `Breadcumb` → `Breadcrumb`:**
  - `src/pages/Breadcumb/` → `src/pages/Breadcrumb/`
  - Update imports in `routeIndex.tsx` and any references
- [ ] **Rename `Pagedown` → `PageDown`:**
  - `src/pages/Pagedown/` → `src/pages/PageDown/`
  - Update route path and imports
- [ ] **Fix `constatns.ts`** → `constants.ts` in `src/pages/Link/`
- [ ] **Verify no other naming inconsistencies** with a case-sensitive search
- [ ] **Consolidate barrel exports** in `src/components/index.ts` — ensure all exported components have consistent patterns

---

## 🟢 Phase 5 — Accessibility

### Critical ARIA fixes
- [ ] **MscModal:** Add `role="dialog"`, `aria-modal="true"`, `Escape` key handler, focus trapping
- [ ] **MscTabs:** Add `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, keyboard navigation
- [ ] **MscBreadcrumb:** Add `aria-label="breadcrumb"`, `aria-current="page"` on last item
- [ ] **MscToggle:** Add `role="switch"` or `aria-checked`, remove `document.querySelector`
- [ ] **SearchBar:** Add `aria-label` or `aria-labelledby` to search input

### General
- [ ] **All `<button>` elements:** Add `type="button"` (unless form submit)
- [ ] **All `<img>` elements:** Ensure meaningful `alt` text
- [ ] **Keyboard navigation:** Audit focus order, skip links, and focus indicators
- [ ] **Color contrast:** Verify all text meets WCAG AA minimum

---

## 🟣 Phase 6 — Performance

- [ ] **useMemo:** Memoize `filteredComponents` in `SearchBar/SearchBar.tsx`
- [ ] **useMemo:** Memoize category rendering in `Sidebar.tsx`
- [ ] **Stabilize deps:** Fix `useEffect` dependencies that cause infinite re-renders (`SearchBar.tsx:24`)
- [ ] **Component splitting:** Lazy-load routes with `React.lazy()` + `Suspense` for large pages
- [ ] **Image optimization:** Add lazy loading (`loading="lazy"`) for component preview images

---

## 🔴 Phase 7 — Security

- [ ] **CSP hardening:** Remove `'unsafe-inline'` and `'unsafe-eval'` from `script-src` in `config/csp.ts`
  - Requires migrating inline styles to CSS classes or using a nonce
- [ ] **Sensitive data:** Verify no secrets in committed files (check `git log` for past leaks)
- [ ] **Auth token:** Ensure token refresh mechanism handles expiry gracefully
- [ ] **DOMPurify:** Audit all `dangerouslySetInnerHTML` usage to ensure sanitization is always applied

---

## ⚪ Phase 8 — Build & CI

- [ ] **Add format script:** `"format": "prettier --write 'src/**/*.{ts,tsx}'"` to `package.json`
- [ ] **Add `pre-commit` hook** (husky + lint-staged) for auto-formatting
- [ ] **Missing CSS:** Add `msc-page-down.js` to `tailwind.config.ts` plugin list if needed
- [ ] **Build warnings:** Resolve any TypeScript strict mode warnings
- [ ] **CI pipeline:** Add GitHub Actions for lint → typecheck → test → build on PRs

---

## 📦 Phase 9 — Component Library Hardening

- [ ] **MscInput:** Replace `id="default"` with dynamic/prop-based ID; expose `onChange`, `value`, `name`
- [ ] **MscBreadcrumb:** Make dynamic with props (items array) instead of hardcoded links
- [ ] **MscToggle:** Replace `document.querySelector` with props/refs; add proper type for `variant`
- [ ] **MscButton:** Add `disabled` prop when loading; add `aria-label` for icon-only buttons
- [ ] **MscModal:** Make fully controlled (lift trigger button out); add focus trapping + keyboard

---

## 📝 Phase 10 — Documentation

- [ ] **README:** Add development setup guide, script explanations, and deployment notes
- [ ] **Component documentation:** Add JSDoc comments to key shared components
- [ ] **Contributing guide:** Create `CONTRIBUTING.md` with PR workflow and conventions
- [ ] **Storybook:** Evaluate migrating component previews to Storybook
