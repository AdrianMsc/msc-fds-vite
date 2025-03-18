import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { dividers } from "./constants";

const MscDividersPage = () => {
  return (
    <>
      <ComponentLayout
        name={dividers.title}
        category={dividers.category}
        description={dividers.description}
      >
        <article className="flex flex-col gap-2 place-content-evenly w-full h-[100px] bg-white rounded py-3 px-4 mb-4">
          <div className="msc-h-divider-gray"></div>

          <div className="msc-h-divider-blue"></div>
        </article>

        <Codeblock>
          {`
  <!-- Horizontal Gray Divider -->
  <div class="msc-h-divider-gray"></div>
  <!-- Horizontal Blue Divider -->
  <div class="msc-h-divider-blue"></div>
            `}
        </Codeblock>

        <article className="flex flex-row gap-2 place-content-evenly w-[100px] h-[300px] bg-white rounded py-3 px-4 my-4">
          <div className="msc-v-divider-gray"></div>

          <div className="msc-v-divider-blue"></div>
        </article>

        <Codeblock>
          {`
  <!-- Vertical Gray Divider -->
  <div class="msc-v-divider-gray"></div>
  <!-- Vertical Blue Divider -->
  <div class="msc-v-divider-blue"></div>
            `}
        </Codeblock>
      </ComponentLayout>
    </>
  );
};

export default MscDividersPage;
