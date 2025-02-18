import { useEffect, useState } from "react";
import { MscButton, MscSpinner } from "../../components";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { spinner } from "./constants";

type Variant = "light" | "dark";

const MscSpinnerPage = () => {
  const [spin, setSpin] = useState<Variant | undefined>(undefined);

  useEffect(() => {
    document.title = "Spinner Component";
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSpin(undefined);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <ComponentLayout
      title={spinner.title}
      category={spinner.category}
      description={spinner.description}
    >
      <section className="flex space-x-5 mb-10">
        <div>
          <div className="msc-spinner-wrapper py-3 cursor-pointer mb-4">
            <svg
              className="msc-spinner"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="28" stroke="white" strokeWidth="6" />
              <circle
                opacity="0.38"
                cx="31"
                cy="31"
                r="28"
                stroke="#212121"
                strokeWidth="6"
              />
              <path
                opacity="0.8"
                d="M3 31C3 15.536 15.536 3 31 3"
                stroke="#212121"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <label className="msc-spinner-label">Spinner Light</label>
          </div>

          <span onClick={() => setSpin("light")}>
            <MscButton label="Launch Light Spinner" />
          </span>
        </div>

        <div>
          <div className="msc-spinner-wrapper bg-monochromes-main py-3 rounded cursor-pointer mb-4">
            <svg
              className="msc-spinner"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="28" stroke="#717171" strokeWidth="6" />
              <path
                opacity="0.8"
                d="M3 31C3 15.536 15.536 3 31 3"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <label className="msc-spinner-label-dark">Spinner Dark</label>
          </div>

          <span onClick={() => setSpin("dark")}>
            <MscButton label="Launch Dark Spinner" />
          </span>
        </div>
      </section>

      {spin ? (
        <MscSpinner variant={spin} loadText={`Loading ${spin} Spinner`} />
      ) : null}

      <Codeblock>
        {`
<!--SPINNER LIGHT-->
<div class="msc-spinner-overlay hidden"></div>
  <div class="msc-spinner-wrapper">
    <svg class="msc-spinner" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="31" r="28" stroke="white" stroke-width="6"/>
      <circle opacity="0.38" cx="31" cy="31" r="28" stroke="#212121" stroke-width="6"/> 
      <path opacity="0.8" d="M3 31C3 15.536 15.536 3 31 3" stroke="#212121" stroke-width="6" stroke-linecap="round"/>
    </svg>  
      <label class="msc-spinner-label">Loading Results</label>
  </div>
</div>

<!--SPINNER DARK-->
<div class="msc-spinner-overlay-dark hidden"></div>
  <div class="msc-spinner-wrapper">
    <svg class="msc-spinner" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="31" r="28" stroke="#717171" stroke-width="6"/>
      <path opacity="0.8" d="M3 31C3 15.536 15.536 3 31 3" stroke="white" stroke-width="6" stroke-linecap="round"/>
    </svg>  
      <label class="msc-spinner-label-dark">Loading Results</label>
  </div>
</div>
        `}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscSpinnerPage;
