import axios from "axios";
import { baseUrl } from ".";
import { IComponentForm } from "../interfaces/component.interface";

export const createComponent = (data: IComponentForm) => {
  const response = axios
    .post(`${baseUrl}/categories/${data.category}/components`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};
