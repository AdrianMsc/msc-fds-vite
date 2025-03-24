import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { MscBreadcrumb } from "../../components";
import Codeblock from "../../layout/Codeblock";

const MscBreadcumbPage = () => {
  useEffect(() => {
    document.title = "Breadcumbs page";
  }, []);

  return (
    <>
      <ComponentLayout>
        <MscBreadcrumb />

        <Codeblock>
          {`
  <ol class="msc-breadcrumb-container">
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
  </ol>
              `}
        </Codeblock>
      </ComponentLayout>
    </>
  );
};

export default MscBreadcumbPage;
