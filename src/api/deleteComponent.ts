import axios from "axios";
import { baseUrl } from ".";
import { IComponentApi } from "../interfaces/component.interface";

export const deleteComponent = (component: IComponentApi) => {
  const response = axios
    .delete(`${baseUrl}/components/${component.id}`)
    .then((response) => response)
    .catch(function (error) {
      console.log(error);
    });

  return response;
};
