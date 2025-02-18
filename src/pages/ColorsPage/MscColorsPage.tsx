import { useEffect } from "react";
import MscColors from "../../components/MscColors/MscColors";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { colors, palettes } from "./constants";

const MscColorsPage = () => {
  useEffect(() => {
    document.title = "Colors Page";
  }, []);

  return (
    <ComponentLayout
      title={colors.title}
      category={colors.category}
      description={colors.description}
    >
      <div className="flex flex-col md:flex-row space-x-2 flex-wrap">
        {palettes.map((palette) => (
          <article
            key={palette.key}
            className="flex flex-col items-start mb-3 bg-white rounded p-3 w-full md:w-fit flex-grow"
          >
            <h2 className="mb-2">{palette.name}</h2>
            <div className="w-full flex overflow-auto">
              <MscColors palette={palette.key} />
            </div>
          </article>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default MscColorsPage;
