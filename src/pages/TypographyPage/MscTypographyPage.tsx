import { useState } from "react";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { typography } from "./constants";

const MscTypographyPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <ComponentLayout
      name={typography.title}
      category={typography.category}
      description={typography.description}
    >
      <div className="msc-input-wrapper mb-4">
        <input
          id="default"
          type="text"
          placeholder="Default"
          className="msc-input peer max-w-sm"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label htmlFor="default" className="msc-input-label">
          Test Text
        </label>
      </div>

      <span className="text-sm font-semibold">
        You are on screen Size:
        <span className="inline lg:hidden"> Mobile</span>
        <span className="hidden lg:inline"> Desktop</span>
      </span>

      <section className="overflow-hidden">
        <h1>{inputValue || "Heading 1"}</h1>
        <h2>{inputValue || "Heading 2"}</h2>
        <h3>{inputValue || "Heading 3"}</h3>
        <h4>{inputValue || "Heading 4"}</h4>
        <h5>{inputValue || "Heading 5"}</h5>
        <h6>{inputValue || "Heading 6"}</h6>
      </section>

      <Codeblock>
        {`
<!-- Heading 1 -->
<h1>Heading 1</h1>
<!-- Heading 2 -->
<h2>Heading 2</h2>
<!-- Heading 3 -->
<h3>Heading 3</h3>
<!-- Heading 4 -->
<h4>Heading 4</h4>
<!-- Heading 5 -->
<h5>Heading 5</h5>
<!-- Heading 6 -->
<h6>Heading 6</h6>
`}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscTypographyPage;
