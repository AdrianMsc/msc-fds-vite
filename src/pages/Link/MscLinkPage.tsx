import React, { useState } from "react";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { codeDefaultLink, codeDropDownLink, codeTextLink } from "./constatns";

interface ExpandedStates {
  [key: string]: boolean;
}

const MscLinkPage: React.FC = () => {
  const [expandedStates, setExpandedStates] = useState<ExpandedStates>({});

  const toggleExpand = (id: string) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default"
        className="mb-4"
        code={codeDefaultLink}
      >
        <div className="flex items-end gap-4">
          <a href="#" className="msc-link">
            Link
          </a>

          <a href="#" className="msc-link-sm">
            Link sm
          </a>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet title="Text" className="mb-4" code={codeTextLink}>
        <div className="flex items-end gap-4">
          <a href="#" className="msc-text-link">
            Text Link
          </a>

          <a href="#" className="msc-text-link-sm">
            Text Link sm
          </a>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Drop Down"
        className="mb-4"
        code={codeDropDownLink}
      >
        <div className="flex items-end gap-4 pt-2">
          <a className="msc-dd-link" onClick={() => toggleExpand("link1")}>
            <span>{expandedStates["link1"] ? "Show Less" : "Show More"}</span>
            <svg
              id="dd-image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`msc-dd-link-icon ${
                expandedStates["link1"] ? "rotate-180" : ""
              }`}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </a>

          <a className="msc-dd-link-sm" onClick={() => toggleExpand("link2")}>
            <span id="dd-text">
              {expandedStates["link2"] ? "Show Less" : "Show More"}
            </span>
            <svg
              id="dd-image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`msc-dd-link-icon ${
                expandedStates["link2"] ? "rotate-180" : ""
              }`}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </a>
        </div>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscLinkPage;
