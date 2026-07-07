type ChangeLogEntry = {
  version: string;
  date: string;
  added?: string[];
  fixed?: string[];
  removed?: string[];
  security?: string[];
  improved?: string[];
};

export const changelog: ChangeLogEntry[] = [
  {
    version: '2.0.0',
    date: '2026-07-07',
    added: [
      'ErrorBoundary component wrapping the entire application.',
      'Sequential component numbering in Component Status table.',
      'Dev environment workflow with `.env` / `.env.local` backend targeting.',
      'Comprehensive README with tech badges, proxy explanation, and architecture docs.',
      'Agent context file (AGENTS.md) and dev-setup skill for AI-assisted development.',
      '`end` prop on sidebar NavLink to fix persistent active state.',
    ],
    fixed: [
      '`errorElement: \'error\'` string literals replaced with proper `<MscErrorPage />` component.',
      'Duplicate `index: true` route conflict (Notifications + GettingStarted).',
      '`serializableCheck: false` narrowed to targeted ignores for `form.image`.',
      'Memory leaks: AbortController added to ApiContext and ComponentLayout effects.',
      'Memory leaks: setTimeout cleanup in ModalForm and ModalFeedback effects.',
      'Debug `console.log(renderCategorySection())` removed from Sidebar.',
      'Protected routes (TableModal, ComponentTester, ComponentHistory) hidden from unauthorized users in sidebar.',
      'HomePage "View Components" and nav links pointing to broken `/docs/Gettingstarted`.',
    ],
  },
  {
    version: '1.7.0',
    date: '2026-03-23',
    added: [
      'Role-Based Access Control (RBAC) with admin, editor, and viewer roles.',
      'User profile synchronization with backend session cookie exchange.',
      'Environment detector for automatic dev/prod API URL switching.',
      'Vite API target configuration (`VITE_API_TARGET`) for flexible backend targeting.',
      'Homepage V2 with PDP layout showcase pages.',
      'Content Security Policy extracted to dedicated config file.',
    ],
    security: [
      'RBAC enforced at route level with ProtectedRoute component.',
      'WIP component access restricted to admin role.',
      'Harden authentication infrastructure with backend session validation.',
    ],
    fixed: [
      'CSP misconfigurations and CORS handling for dev/prod environments.',
      'PDP page routing and backend URL resolution.',
      'Lint errors across the codebase.',
      'Environment variable caching issues.',
    ],
  },
  {
    version: '1.6.0',
    date: '2026-02-26',
    added: [
      'Atomic design category pages: atoms, molecules, organisms with examples.',
      'Organism components: BestSellers, Slider, Testimonials, Category Tags.',
      'Product Features, Specifications Table, and Documents Section components.',
      'Rating and Qty Input molecule components.',
      'Similar Items component with route support.',
      'Feature Highlights, MSC Info, and Question Flag components.',
      'Ecosystem page with architecture diagram.',
      'Component count logic and atomic type badge.',
    ],
    fixed: [
      'Build errors and routing string inconsistencies.',
      'Component description handling during updates.',
      'SVG lint errors and path normalization.',
    ],
  },
  {
    version: '1.5.0',
    date: '2026-01-05',
    added: [
      'Sidebar V2 redesign with grouped navigation.',
      'Atomic type field in component form with creation and update support.',
      'Search bar with improved UX and input handling.',
      'Homepage slider with new design.',
      'Modal form loading state during submissions.',
      'Sidebar organization by atomic type categories.',
    ],
    fixed: [
      'Unused variables in ecosystem page.',
      'Search input behavior and responsiveness.',
    ],
  },
  {
    version: '1.4.0',
    date: '2025-08-13',
    added: [
      'Architecture flow page with interactive diagram.',
      'Changelog page with version history.',
      'Sidebar skeleton loading state.',
      'Navbar style improvements.',
      'Component data persistence to localStorage via Redux subscription.',
      'Environment files added to `.gitignore` for security.',
    ],
    fixed: [
      'Unfinished component links hidden from sidebar.',
      'Authentication state handling in useEffect.',
      'Margin and padding adjustments for responsive layout.',
    ],
  },
  {
    version: '1.3.0',
    date: '2025-05-28',
    added: [
      'Switched component info sourcing to Redux.',
      'Sidebar animation implemented.',
      'Description field added to the component form.',
      'URL validator introduced for input validation.',
    ],
    fixed: [
      'Padding issues and image display.',
      'TypeScript type definitions and component alignment.',
    ],
    removed: ['Unused code and redundant logic.'],
  },
  {
    version: '1.2.0',
    date: '2025-05-14',
    added: [
      'Figma and Storybook links added to the component detail page.',
      'Ability to edit components directly from their pages.',
      'Navigation links enhanced for components.',
    ],
    fixed: ['Navbar layout and size issues.', 'Minor frontend adjustments.'],
  },
  {
    version: '1.1.0',
    date: '2025-04-29',
    added: [
      'Feedback deletion feature.',
      'UI components like dropdowns, toggles, and input radios.',
      'Inbox page improvements and updated typography.',
    ],
    fixed: ['Navbar, padding, and responsive layout bugs.'],
  },
  {
    version: '1.0.0',
    date: '2025-04-01',
    added: [
      'Full CRUD functionality for components and resources.',
      'Enhanced search bar UX with arrow key navigation.',
      'Spanish translation and improved layout structure.',
      'Notification system, toast messages, and dialog animations.',
    ],
    improved: ['Layout and category refactoring.', 'Overall responsiveness and code cleanup.'],
  },
  {
    version: '0.9.0',
    date: '2025-03-19',
    added: [
      'Refactored form and Redux actions for components.',
      'Sidebar placeholders and component categorization.',
      'Redux state persistence and layout migration.',
    ],
  },
  {
    version: '0.8.0',
    date: '2025-02-24',
    added: [
      'Complete Redux setup for app state management.',
      'Centralized validation logic and app-level data fetching.',
    ],
  },
  {
    version: '0.7.0',
    date: '2025-02-10',
    added: [
      'Responsive layout with sidebar and navbar.',
      'UI components: tabs, alerts, mini loader, etc.',
    ],
  },
  {
    version: '0.6.0',
    date: '2025-02-04',
    added: [
      'CRUD endpoints: Create, Read, Update, Delete.',
      'TypeScript interfaces standardized.',
      'Separated concerns in backend logic.',
    ],
  },
  {
    version: '0.5.0',
    date: '2025-01-27',
    added: [
      'Functional form to create components.',
      'First integration of frontend and backend components.',
    ],
  },
  {
    version: '0.1.0',
    date: '2024-10-30',
    added: [
      'Initial setup with Vite + React + TailwindCSS.',
      'Router setup using React Router.',
      'Base layout and styling.',
    ],
  },
];
