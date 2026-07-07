# Changelog

All notable changes to this project will be documented here.

## [2.0.0] - 2026-07-07
### Added
- ErrorBoundary component wrapping the entire application.
- Sequential component numbering in Component Status table.
- Dev environment workflow with `.env` / `.env.local` backend targeting.
- Comprehensive README with tech badges, proxy explanation, and architecture docs.
- Agent context file (AGENTS.md) and dev-setup skill for AI-assisted development.
- `end` prop on sidebar NavLink to fix persistent active state.

### Fixed
- `errorElement: 'error'` string literals replaced with proper `<MscErrorPage />` component.
- Duplicate `index: true` route conflict (Notifications + GettingStarted).
- `serializableCheck: false` narrowed to targeted ignores for `form.image`.
- Memory leaks: AbortController added to ApiContext and ComponentLayout effects.
- Memory leaks: setTimeout cleanup in ModalForm and ModalFeedback effects.
- Debug `console.log(renderCategorySection())` removed from Sidebar.
- Protected routes (TableModal, ComponentTester, ComponentHistory) hidden from unauthorized users in sidebar.
- HomePage "View Components" and nav links pointing to broken `/docs/Gettingstarted`.

---

## [1.7.0] - 2026-03-23
### Added
- Role-Based Access Control (RBAC) with admin, editor, and viewer roles.
- User profile synchronization with backend session cookie exchange.
- Environment detector for automatic dev/prod API URL switching.
- Vite API target configuration (`VITE_API_TARGET`) for flexible backend targeting.
- Homepage V2 with PDP layout showcase pages.
- Content Security Policy extracted to dedicated config file.

### Security
- RBAC enforced at route level with ProtectedRoute component.
- WIP component access restricted to admin role.
- Harden authentication infrastructure with backend session validation.

### Fixed
- CSP misconfigurations and CORS handling for dev/prod environments.
- PDP page routing and backend URL resolution.
- Lint errors across the codebase.
- Environment variable caching issues.

---

## [1.6.0] - 2026-02-26
### Added
- Atomic design category pages: atoms, molecules, organisms with examples.
- Organism components: BestSellers, Slider, Testimonials, Category Tags.
- Product Features, Specifications Table, and Documents Section components.
- Rating and Qty Input molecule components.
- Similar Items component with route support.
- Feature Highlights, MSC Info, and Question Flag components.
- Ecosystem page with architecture diagram.
- Component count logic and atomic type badge.

### Fixed
- Build errors and routing string inconsistencies.
- Component description handling during updates.
- SVG lint errors and path normalization.

---

## [1.5.0] - 2026-01-05
### Added
- Sidebar V2 redesign with grouped navigation.
- Atomic type field in component form with creation and update support.
- Search bar with improved UX and input handling.
- Homepage slider with new design.
- Modal form loading state during submissions.
- Sidebar organization by atomic type categories.

### Fixed
- Unused variables in ecosystem page.
- Search input behavior and responsiveness.

---

## [1.4.0] - 2025-08-13
### Added
- Architecture flow page with interactive diagram.
- Changelog page with version history.
- Sidebar skeleton loading state.
- Navbar style improvements.
- Component data persistence to localStorage via Redux subscription.
- Environment files added to `.gitignore` for security.

### Fixed
- Unfinished component links hidden from sidebar.
- Authentication state handling in useEffect.
- Margin and padding adjustments for responsive layout.

---

## [1.3.0] - 2025-05-28
### Added
- Switched component info sourcing to Redux.
- Sidebar animation implemented.
- Description field added to the component form.
- URL validator introduced for input validation.

### Fixed
- Padding issues and image display.
- TypeScript type definitions and component alignment.

### Removed
- Unused code and redundant logic.

---

## [1.2.0] - 2025-05-14
### Added
- Figma and Storybook links added to the component detail page.
- Ability to edit components directly from their pages.
- Navigation links enhanced for components.

### Fixed
- Navbar layout and size issues.
- Minor frontend adjustments.

---

## [1.1.0] - 2025-04-29
### Added
- Feedback deletion feature.
- UI components like dropdowns, toggles, and input radios.
- Inbox page improvements and updated typography.

### Fixed
- Navbar, padding, and responsive layout bugs.

---

## [1.0.0] - 2025-04-01
### Added
- Full CRUD functionality for components and resources.
- Enhanced search bar UX with arrow key navigation.
- Spanish translation and improved layout structure.
- Notification system, toast messages, and dialog animations.

### Improved
- Layout and category refactoring.
- Overall responsiveness and code cleanup.

---

## [0.9.0] - 2025-03-19
### Added
- Refactored form and Redux actions for components.
- Sidebar placeholders and component categorization.
- Redux state persistence and layout migration.

---

## [0.8.0] - 2025-02-24
### Added
- Complete Redux setup for app state management.
- Centralized validation logic and app-level data fetching.

---

## [0.7.0] - 2025-02-10
### Added
- Responsive layout with sidebar and navbar.
- UI components: tabs, alerts, mini loader, etc.

---

## [0.6.0] - 2025-02-04
### Backend API
- CRUD endpoints: Create, Read, Update, Delete.
- TypeScript interfaces standardized.
- Separated concerns in backend logic.

---

## [0.5.0] - 2025-01-27
### Added
- Functional form to create components.
- First integration of frontend and backend components.

---

## [0.1.0] - 2024-10-30
### Added
- Initial setup with Vite + React + TailwindCSS.
- Router setup using React Router.
- Base layout and styling.
