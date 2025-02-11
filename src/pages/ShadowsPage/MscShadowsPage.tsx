import { MscShadows } from "../../components";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { shadows, shadowSizes } from "./constants";

const MscShadowsPage = () => {
  return (
    <ComponentLayout
      title={shadows.title}
      category={shadows.category}
      description={shadows.description}
    >
      <article className="flex gap-10 items-center bg-white p-5 max-w-[1500px] rounded overflow-hidden h-fit flex-wrap mb-4">
        {Object.keys(shadowSizes).map((size) => (
          <MscShadows key={size} size={size as keyof typeof shadowSizes} />
        ))}
      </article>

      <Codeblock>
        {`
  <!-- Small shadow -->
  <div class="shadow-sm">Shadow Box</div>
  <!-- Default shadow -->
  <div class="shadow">Shadow Box</div>
  <!-- Medium shadow -->
  <div class="shadow-md">Shadow Box</div>
  <!-- Large shadow -->
  <div class="shadow-lg">Shadow Box</div>
  <!-- Extra large shadow -->
  <div class="shadow-xl">Shadow Box</div>
  <!-- Double extra large shadow -->
  <div class="shadow-2xl">Shadow Box</div>
  <!-- Inner shadow -->
  <div class="shadow-inner">Shadow Box</div>
        `}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscShadowsPage;
