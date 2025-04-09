import React from "react";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { MscButton } from "../../components";

const ComponentTesterPage: React.FC = () => {
  const codeVar = `
  <!-- Primary -->        
  <button className="msc-btn msc-btn-blue-solid">Blue Solid</button>
  <!-- Secondary -->
  <button className="msc-btn msc-btn-blue-outline">Blue Outline</button>
  <!-- Tertiary -->
  <button className="msc-btn msc-btn-blue-transparent">Text Only</button>
  <!-- Small -->        
  <button className="msc-btn msc-btn-blue-solid msc-btn-sm">Small Button</button>
  `;
  return (
    <>
      <h1>Hello Testing</h1>

      <MscComponentSnippet title="Component Title" code={codeVar}>
        <MscButton label="Botón de prueba" />
      </MscComponentSnippet>
    </>
  );
};

export default ComponentTesterPage;
