import { NavigateFunction } from "react-router-dom";
import { ICategoryApi } from "../../interfaces/component.interface";
import { createLinkPage } from "../../utils/createLinkPage";
import handleDataSend from "../../utils/handleDataSend";
import { routesIndex } from "../../router/routeIndex";

const handleKeyDown = (
  event: KeyboardEvent,
  components: string[],
  setQuery: (value: string) => void,
  navigate: NavigateFunction,
  categories: ICategoryApi[] | null
) => {
  if (event.key === "Enter" && components.length > 0) {
    event.preventDefault();
    const firstComponent = components[0];
    const formattedName = createLinkPage(firstComponent);

    setQuery("");

    if (
      routesIndex[1].children?.some((route) => route.path === formattedName)
    ) {
      handleDataSend(
        navigate,
        `/docs/${formattedName}`,
        firstComponent,
        categories ?? []
      );
    } else {
      handleDataSend(
        navigate,
        `/docs/WipComponent/${formattedName}`,
        firstComponent,
        categories ?? []
      );
    }
  }
};

export default handleKeyDown;
