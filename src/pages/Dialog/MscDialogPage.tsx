import { useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { codeDialog } from "./constants";

const MscDialogPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState("");

  const toggleDialog = () => {
    setIsDialogOpen((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <ComponentLayout>
      <MscComponentSnippet code={codeDialog} className="mb-4">
        <button
          id="dialogBtn"
          className="msc-btn msc-btn-blue-solid mb-4"
          onClick={toggleDialog}
        >
          Trigger Dialog
        </button>
      </MscComponentSnippet>

      {isDialogOpen && (
        <div className={`msc-modal-bg ${toggleDialog}`}>
          <article className="msc-dialog">
            <h4 className="msc-dialog-title">Are you sure?</h4>
            <p>
              You are setting your status as Out of Office. Your organization
              will see this status until you turn it off.
            </p>
            <div className="msc-dialog-footer">
              <button
                className="msc-btn msc-btn-transparent"
                onClick={toggleDialog}
              >
                Cancel
              </button>
              <button className="msc-btn msc-btn-blue-solid">Continue</button>
            </div>
          </article>
        </div>
      )}
    </ComponentLayout>
  );
};

export default MscDialogPage;
