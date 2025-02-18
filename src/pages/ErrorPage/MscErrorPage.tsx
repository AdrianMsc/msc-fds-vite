import { useEffect } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { error } from "./constants";
import errorImg from "./assets/error-image.svg";

const MscErrorPage = () => {
  useEffect(() => {
    document.title = "Error 404 Page";
  }, []);

  return (
    <>
      <ComponentLayout
        title={error.title}
        category={error.category}
        description={error.description}
      >
        <section className="flex justify-center bg-white rounded -z-10">
          <article className="flex bg-white p-3 h-fit w-fit md:gap-10 rounded flex-wrap justify-center">
            <div className="w-[300px] mb-4 md:mb-0">
              <img src={errorImg} alt="Error image" />
            </div>

            <div className="flex flex-col items-center justify-center max-w-[350px]">
              <h2 className="text-monochromes font-bold text-[28px] md:text-2xl xl:text-28 3xl:text-32 leading-5 md:leading-6 xl:leading-7 3xl:leading-8 mb-2 xl:mb-3">
                Error 404
              </h2>

              <small className="text-monochromes-main text-sm leading-5 text-center opacity-65">
                The page you are looking for does not exist.
                <br className="hidden md:inline" />
                We’ll do our best to help you find what you’re looking for.
              </small>

              <button className="msc-btn msc-btn-blue-solid w-10/12 text-base mb-6 mt-6">
                View All Product Categories
              </button>

              <button className="msc-btn msc-btn-blue-outline w-10/12 text-base">
                Contact us
              </button>
            </div>
          </article>
        </section>
      </ComponentLayout>
    </>
  );
};

export default MscErrorPage;
