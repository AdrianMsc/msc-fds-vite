# Fix Naming — Rename Skill

Fixes file naming inconsistencies across the project.

## Known Issues

| Current (wrong) | Should be |
|----------------|-----------|
| `Breadcumb` | `Breadcrumb` |
| `Pagedown` | `PageDown` |
| `constatns.ts` | `constants.ts` |
| `AlphabeticPager` | `AlphabeticalPager` |

## Process for Each Rename

1. **Rename the file/directory** on disk
2. **Update all imports** across the project (grep for the old name)
3. **Update route paths** in `src/router/routeIndex.tsx`
4. **Update any route links** in `Sidebar.tsx`, `ComponentLayout.tsx`, etc.
5. **Update document titles** in page components
6. **Verify** with `npm run build`

### Example: Breadcumb → Breadcrumb

```bash
# Rename files/dirs
mv src/pages/Breadcumb src/pages/Breadcrumb

# Update all references
rg 'Breadcumb' --files-with-matches src/ | xargs sed -i '' 's/Breadcumb/Breadcrumb/g'
rg 'Breadcumb' --files-with-matches styles/ | xargs sed -i '' 's/Breadcumb/Breadcrumb/g'
rg 'Breadcumb' --files-with-matches router/ | xargs sed -i '' 's/Breadcumb/Breadcrumb/g'
```

> ⚠️ Be careful with `sed` on macOS (use `sed -i ''`). Consider using the Edit tool for precision.
