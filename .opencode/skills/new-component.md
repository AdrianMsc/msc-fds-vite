# New Component — Scaffolding Skill

Creates a new design system component following the project conventions.

## Steps

1. **Create the component file** at `src/components/MscXxx.tsx` (PascalCase):
   - Use named export `export const MscXxx: React.FC<MscXxxProps> = ...`
   - Add proper TypeScript interface for props
   - Include ARIA attributes (role, aria-label)
   - All `<button>` must have `type="button"`
   - Use Tailwind utility classes for styling (no CSS-in-JS)
   - Use `useId()` for unique IDs if needed

2. **Create the page showcase** at `src/pages/Xxx/MscXxxPage.tsx`:
   - Create a directory with `index.tsx` (barrel) or `MscXxxPage.tsx`
   - Add `constants.ts` with example data if applicable

3. **Register in router** at `src/router/routeIndex.tsx`:
   - Import the page component at the top
   - Add route object in the `/docs` children array

4. **Add styles** (optional) at `styles/classes/msc-xxx.js`:
   - Create Tailwind plugin for `.msc-*` classes
   - Register in `tailwind.config.ts` plugins array

5. **Barrel export** at `src/components/index.ts`:
   - Add re-export if the component should be publicly available

## Validation

- `npm run lint` — no errors
- `npm run build` — type-checks and builds cleanly
