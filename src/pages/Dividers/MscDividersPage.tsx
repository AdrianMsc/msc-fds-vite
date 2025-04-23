import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { codeDividersHorizontal, codeDividerVertical } from "./constants";

const MscDividersPage = () => {
  return (
    <>
      <ComponentLayout>
        <MscComponentSnippet className="mb-4" code={codeDividersHorizontal}>
          <article className="flex flex-col gap-2 place-content-evenly w-full h-[100px] bg-white rounded py-3 px-4 ">
            <div className="msc-h-divider-gray"></div>

            <div className="msc-h-divider-blue"></div>
          </article>
        </MscComponentSnippet>

        <MscComponentSnippet code={codeDividerVertical} className="mb-4">
          <article className="flex flex-row gap-2 place-content-evenly w-[100px] h-[300px] bg-white rounded py-3 px-4 my-4">
            <div className="msc-v-divider-gray"></div>

            <div className="msc-v-divider-blue"></div>
          </article>
        </MscComponentSnippet>
      </ComponentLayout>
    </>
  );
};

export default MscDividersPage;
