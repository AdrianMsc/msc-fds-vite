import { IComponent } from "../interfaces/sidebar.interface";
import { createLinkPage } from "./createLinkPage";
import { routesIndex } from "../router/routeIndex";

export const getNavLinkTo = (comp: IComponent) => {
  const formattedName = createLinkPage(comp.name);
  if (routesIndex[1].children?.some((route) => route.path === formattedName)) {
    return `/docs/${formattedName}`;
  } else {
    return `/docs/WipComponent/${formattedName}`;
  }
};
