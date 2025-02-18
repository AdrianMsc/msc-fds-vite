import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { MscPagination } from "../../components";
import Codeblock from "../../layout/Codeblock";
import { pagination } from "./constants";

const MscPaginationPage = () => {
  useEffect(() => {
    document.title = "Breadcumbs page";
  }, []);

  return (
    <>
      <ComponentLayout
        title={pagination.title}
        description={pagination.description}
        category={pagination.category}
      >
        <MscPagination />
        <br />
        <Codeblock>
          {`
   <nav class="msc-pagination">
    <button class="msc-pagination-btn-text" disabled>
      <i class="fa-solid fa-chevron-left"></i>
      <p>Previous</p>
    </button>
    <button class="msc-pagination-btn msc-pagination-btn-active">1</button>
    <button class="msc-pagination-btn">2</button>
    <button class="msc-pagination-btn">3</button>
    <button class="msc-pagination-btn-ellipsis">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
    <button class="msc-pagination-btn">10</button>
    <button class="msc-pagination-btn-text">
      <p>Next</p>
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </nav>
                  `}
        </Codeblock>
      </ComponentLayout>
    </>
  );
};

export default MscPaginationPage;
