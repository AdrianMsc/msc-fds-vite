import React from "react";
import { changelog } from "./constants";

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
