import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { MscBreadcrumb } from "../../components";
import Codeblock from "../../layout/Codeblock";
import { breadcumb } from "./constants";

const MscBreadcumbPage = () => {
  useEffect(() => {
    document.title = "Breadcumbs page";
  }, []);

  return (
    <>
      <ComponentLayout
        name={breadcumb.title}
        description={breadcumb.description}
        category={breadcumb.category}
      >
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
