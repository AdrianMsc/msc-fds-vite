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
    // Only pass the component ID in the state, not the entire component
    navigate(path, {
      state: { componentId: component.id },
    });
  }
};

export default handleDataSend;
