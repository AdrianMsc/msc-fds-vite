import { ICategoryApi } from "../interfaces/component.interface";

const handleDataSend = (
  navigate: any,
  path: string,
  componentName: string,
  categories: ICategoryApi[]
) => {
  const component = categories
    .flatMap((category: ICategoryApi) => category.components)
    .find((comp: any) => comp.name === componentName);

  if (component) {
    navigate(path, {
      state: component,
    });
  }
};

export default handleDataSend;
