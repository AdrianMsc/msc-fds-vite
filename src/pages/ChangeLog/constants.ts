type ChangeLogEntry = {
  version: string;
  date: string;
  added?: string[];
  fixed?: string[];
  removed?: string[];
};

export const changelog: ChangeLogEntry[] = [
  {
    version: "1.3.0",
    date: "2025-05-28",
    added: [
      "Switched component info sourcing to Redux.",
      "Sidebar animation implemented.",
      "Description field added to the component form.",
      "URL validator introduced for input validation.",
    ],
    fixed: [
      "Padding issues and image display.",
      "TypeScript type definitions and component alignment.",
    ],
    removed: ["Unused code and redundant logic."],
  },
  {
    version: "1.2.0",
    date: "2025-05-14",
    added: [
      "Figma and Storybook links added to the component detail page.",
      "Ability to edit components directly from their pages.",
      "Navigation links enhanced for components.",
    ],
    fixed: ["Navbar layout and size issues.", "Minor frontend adjustments."],
  },
  {
    version: "1.1.0",
    date: "2025-04-29",
    added: [
      "Feedback deletion feature.",
      "UI components like dropdowns, toggles, and input radios.",
      "Inbox page improvements and updated typography.",
    ],
    fixed: ["Navbar, padding, and responsive layout bugs."],
  },
  {
    version: "1.0.0",
    date: "2025-04-01",
    added: [
      "Full CRUD functionality for components and resources.",
      "Enhanced search bar UX with arrow key navigation.",
      "Spanish translation and improved layout structure.",
      "Notification system, toast messages, and dialog animations.",
    ],
    fixed: ["Layout refactoring and code cleanup."],
  },
  {
    version: "0.9.0",
    date: "2025-03-19",
    added: [
      "Refactored form and Redux actions for components.",
      "Sidebar placeholders and component categorization.",
      "Redux state persistence and layout migration.",
    ],
  },
  {
    version: "0.8.0",
    date: "2025-02-24",
    added: [
      "Complete Redux setup for app state management.",
      "Centralized validation logic and app-level data fetching.",
    ],
  },
  {
    version: "0.7.0",
    date: "2025-02-10",
    added: [
      "Responsive layout with sidebar and navbar.",
      "UI components: tabs, alerts, mini loader, etc.",
    ],
  },
  {
    version: "0.6.0",
    date: "2025-02-04",
    added: [
      "CRUD endpoints: Create, Read, Update, Delete.",
      "TypeScript interfaces standardized.",
      "Separated concerns in backend logic.",
    ],
  },
  {
    version: "0.5.0",
    date: "2025-01-27",
    added: [
      "Functional form to create components.",
      "First integration of frontend and backend components.",
    ],
  },
  {
    version: "0.1.0",
    date: "2024-10-30",
    added: [
      "Initial setup with Vite + React + TailwindCSS.",
      "Router setup using React Router.",
      "Base layout and styling.",
    ],
  },
];
