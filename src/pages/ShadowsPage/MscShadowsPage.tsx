import { MscShadows } from "../../components";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { shadowsCode, shadowSizes } from "./constants";

const MscShadowsPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet code={shadowsCode} className="mb-4">
        <article className="flex gap-10 items-center bg-white p-5 max-w-[1500px] rounded overflow-hidden h-fit flex-wrap mb-4">
          {Object.keys(shadowSizes).map((size) => (
            <MscShadows key={size} size={size as keyof typeof shadowSizes} />
          ))}
        </article>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscShadowsPage;
