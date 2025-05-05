import React, { ReactNode, useState } from "react";
import Codeblock from "../../layout/Codeblock";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface MscComponentSnippetProps {
  title?: string;
  children: ReactNode;
  code?: string;
  variant?: "white" | "transparent";
  className?: string;
}

const MscComponentSnippet: React.FC<MscComponentSnippetProps> = ({
  title = "",
  children,
  code = "<!-- Your Code Goes Here -->",
  variant = "white",
  className,
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleCode = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  const copyCodeSnippet = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        showToast(dispatch, "success", "Code copied to the clipboard");
      })
      .catch((err) => {
        showToast(dispatch, "error", "Something is wrong");
        console.error("Something is Wrong: ", err);
      });
  };

  return (
    <article className={className}>
      {title ? <h2 className="font-bold text-2xl mb-2">{title}</h2> : null}

      <div
        className={`${
          variant === "white" ? "bg-white" : "bg-transparent"
        } rounded-lg border border-monochromes-grey_xlight`}
      >
        <div className="p-5">{children}</div>
        <div className="border-y border-monochromes-grey_xlight py-1 px-2 flex bg-white">
          <button
            className="text-monochromes-grey_light ml-auto"
            onClick={() => toggleCode()}
          >
            {isCodeVisible ? "Hide" : "Show"} Code
          </button>
        </div>
        <div className={isCodeVisible ? "static" : "hidden"}>
          <Codeblock className="!m-0 !rounded-none">{code}</Codeblock>
          <div
            className="bg-monochromes-grey_xdark text-white rounded-b py-1 px-3 flex justify-end text-sm cursor-pointer"
            onClick={copyCodeSnippet}
          >
            Copy
          </div>
        </div>
      </div>
    </article>
  );
};

export default MscComponentSnippet;
