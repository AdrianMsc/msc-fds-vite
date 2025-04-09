import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  children: string;
  className?: string;
}

const Codeblock = ({ children, className }: Props) => {
  return (
    <SyntaxHighlighter
      language="cshtml"
      style={atomDark}
      className={`max-[1500px] ${className}`}
    >
      {children}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
