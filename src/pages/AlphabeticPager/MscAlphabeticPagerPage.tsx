import { useEffect } from "react";
import { MscAlphabeticPager } from "../../components";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { codeAlphabeticPager } from "./constants";

const MscAlphabeticPagerPage = () => {
  useEffect(() => {
    document.title = "Alphabetic pager";
  }, []);

  return (
    <>
      <ComponentLayout>
        <MscComponentSnippet code={codeAlphabeticPager} variant="transparent">
          <MscAlphabeticPager />
        </MscComponentSnippet>
      </ComponentLayout>
    </>
  );
};

export default MscAlphabeticPagerPage;
