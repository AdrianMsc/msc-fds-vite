import { MscToggle } from "../../components";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import {
  codeToggleAddres,
  codeToggleClass,
  codeToggleDefault,
  codeToggleTolerance,
  codeToggleUnits,
  codeToggleWithText,
  codeToggleWithTextDisabled,
} from "./constants";

const MscTogglePage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default"
        className="mb-4"
        code={codeToggleDefault}
      >
        <MscToggle variant="Default" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="With Text"
        className="mb-4"
        code={codeToggleWithText}
      >
        <MscToggle variant="With Text" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="With Text Disabled"
        className="mb-4"
        code={codeToggleWithTextDisabled}
      >
        <MscToggle variant="Disabled" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Addres Type"
        className="mb-4"
        code={codeToggleAddres}
      >
        <MscToggle variant="Address" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Units"
        className="mb-4"
        code={codeToggleUnits}
      >
        <MscToggle variant="Units" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Tolerance"
        className="mb-4"
        code={codeToggleTolerance}
      >
        <MscToggle variant="Tolerance" />
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Class"
        className="mb-4"
        code={codeToggleClass}
      >
        <MscToggle variant="Class" />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscTogglePage;
