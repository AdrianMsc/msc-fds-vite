import axios from "axios";
import { baseUrl } from ".";

interface IComponentData {
  cdn: string;
  category: string;
  comment?: string;
  name: string;
  figma: string;
  guidelines: string;
  storybook: string;
}

export const createComponent = (data: IComponentData) => {
  const response = axios
    .post(
      `${baseUrl}/categories/${data.category}/components`,
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