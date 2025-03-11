import axios, { AxiosResponse } from "axios";
import { IComponentApi } from "../interfaces/component.interface";
import { baseUrl } from ".";

export const updateComponent = async (
  component: IComponentApi
): Promise<AxiosResponse<IComponentApi>> => {
  try {
    const response = await axios.put<IComponentApi>(
      `${baseUrl}/categories/${component.category}/components/${component.id}`,
      component
    );
    return response;
  } catch (error) {
    console.error("Error updating component:", error);
    throw error;
  }
};
