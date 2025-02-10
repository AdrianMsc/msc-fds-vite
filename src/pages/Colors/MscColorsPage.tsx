import MscColors from "../../components/MscColors/MscColors";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { colors, palettes } from "./constants";

const MscColorsPage = () => {
  return (
    <ComponentLayout
      title={colors.title}
      category={colors.category}
      description={colors.description}
    >
      <div className="flex gap-2 flex-wrap">
        {palettes.map((palette) => (
          <article
            key={palette.key}
            className="flex flex-col items-start mb-3 bg-white rounded p-3 w-4/12 flex-grow"
          >
            <h2 className="mb-2">{palette.name}</h2>
            <MscColors palette={palette.key} />
          </article>
        ))}
      </div>
    </ComponentLayout>
  );
};

export default MscColorsPage;
