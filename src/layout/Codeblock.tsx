import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  children: string;
}

const Codeblock = ({ children }: Props) => {
  return (
    <SyntaxHighlighter
      language="cshtml"
      style={atomDark}
      className="max-[1500px] mt-2 rounded mb-10"
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
