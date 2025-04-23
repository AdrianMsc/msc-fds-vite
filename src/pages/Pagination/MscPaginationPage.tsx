import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { MscPagination } from "../../components";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { codePagination } from "./constants";

const MscPaginationPage = () => {
  useEffect(() => {
    document.title = "Breadcumbs page";
  }, []);

  return (
    <>
      <ComponentLayout>
        <MscComponentSnippet variant="transparent" code={codePagination}>
          <MscPagination />
        </MscComponentSnippet>
      </ComponentLayout>
    </>
  );
};

export default MscPaginationPage;
