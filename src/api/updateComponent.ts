import axios from "axios";
import { IComponentApi } from "../interfaces/component.interface";
import { baseUrl } from ".";

export const updateComponent = (component: IComponentApi) => {
  const response = axios.put(`${baseUrl}/categories/${component.category}/components/${component.id}`, component)

  return response
}