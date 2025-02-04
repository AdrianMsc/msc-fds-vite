import axios from "axios";
import { baseUrl } from ".";

interface IComponentData {
  cdnStage: string;
  componentCategory: string;
  componentComments?: string;
  componentName: string;
  figmaStage: string;
  guidelinesStage: string;
  storybookStage: string;
}

export const createComponent = (data: IComponentData) => {

  const response = axios
    .post(
      `${baseUrl}/categories/${data.componentCategory}/components`,
      data
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};