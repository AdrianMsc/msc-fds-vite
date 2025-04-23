import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { MscBreadcrumb } from "../../components";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { codeBreadcumbs } from "./constants";

const MscBreadcumbPage = () => {
  useEffect(() => {
    document.title = "Breadcumbs page";
  }, []);

  return (
    <>
      <ComponentLayout>
        <MscComponentSnippet code={codeBreadcumbs}>
          <MscBreadcrumb />
        </MscComponentSnippet>
      </ComponentLayout>
    </>
  );
};

export default MscBreadcumbPage;
