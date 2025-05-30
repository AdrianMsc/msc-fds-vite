import React from "react";

// Define the structure of a changelog entry
type ChangeLogEntry = {
  version: string;
  date: string;
  added?: string[];
  fixed?: string[];
  removed?: string[];
};

// All changelog entries
const changelog: ChangeLogEntry[] = [
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

// React component
const ChangeLog: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📜 Changelog</h1>
      <p className="mb-6">
        This page contains the official changelog for the project, documenting
        all meaningful updates, new features, improvements, and fixes across
        versions. Use it to stay informed about recent changes and the evolution
        of the product over time.
      </p>
      {changelog.map(({ version, date, added, fixed, removed }) => (
        <div key={version} className="mb-8 border-b pb-6 border-gray-200">
          <h2 className="text-xl font-semibold text-blue-600">
            Version {version}{" "}
            <span className="text-sm text-gray-500">({date})</span>
          </h2>

          {Array.isArray(added) && added.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">➕ Added</h3>
              <ul className="list-disc list-inside text-gray-800">
                {added.map((item, index) => (
                  <li key={`added-${version}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(fixed) && fixed.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-yellow-700">🔧 Fixed</h3>
              <ul className="list-disc list-inside text-gray-800">
                {fixed.map((item, index) => (
                  <li key={`fixed-${version}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(removed) && removed.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-red-700">🗑️ Removed</h3>
              <ul className="list-disc list-inside text-gray-800">
                {removed.map((item, index) => (
                  <li key={`removed-${version}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChangeLog;
