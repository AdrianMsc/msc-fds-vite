# Release & Versioning — Skill

## Version Scheme

Current major: **v2** (set July 2026).  
Format: `v2.xx.yy`

| Increment | When |
|-----------|------|
| **Major** (v3.0.0) | Breaking, disruptive changes only |
| **Minor** (v2.1.0, v2.2.0...) | New features, significant additions |
| **Patch** (v2.0.1, v2.0.2...) | Bug fixes, small tweaks, refactors |

## Release Process

1. Check `changelog.md` for the last version entry
2. Determine next version based on changes
3. Update `changelog.md` (add entry at the top)
4. Update `src/pages/ChangeLog/constants.ts` (same data as changelog.md)
5. Commit with message `chore: release v2.xx.yy`
6. Tag with `git tag v2.xx.yy`

## After Each Feature/Fix

During development, track changes for the next release entry.  
No need to update changelog on every commit — batch at release time.

## Related Files

- `changelog.md` — Markdown changelog for external reading
- `src/pages/ChangeLog/constants.ts` — Data source for the in-app Changelog page
- `src/pages/ChangeLog/ChangeLog.tsx` — Renders the changelog with timeline, badges, and animations
