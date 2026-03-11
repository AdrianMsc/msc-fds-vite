import { ICategoryApi, IComponentApi } from "../interfaces/component.interface";

const handleDataSend = (
  navigate: (path: string, options?: { state?: unknown }) => void,
  path: string,
  componentName: string,
  categories: ICategoryApi[]
) => {
  const component = categories
    .flatMap((category: ICategoryApi) => category.components)
    .find((comp: IComponentApi) => comp.name === componentName);

  if (component) {
    navigate(path, {
      state: component,
    });
  }
};

export default handleDataSend;
