# Build & Lint — Validation Skill

Runs the full validation pipeline after making changes.

## Steps

Run these commands in order:

```bash
npm run lint
npm run build
```

### Common Fixes

- **ESLint errors**: Check `eslint.config.js` for rules; auto-fix with `npx eslint . --fix`
- **Type errors**: Check `tsconfig.app.json` (strict mode); fix type mismatches
- **Build failures**: Run `tsc -b` to see detailed type errors, then `vite build`

### Notes

- The project uses `tsc -b` (project references) before `vite build`
- `tsconfig.app.json` has `strict: true`, `noUnusedLocals`, `noUnusedParameters`
- The `eslint.config.js` includes react-hooks and react-refresh plugins
