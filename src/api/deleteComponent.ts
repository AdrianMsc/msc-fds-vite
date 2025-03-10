import axios, { AxiosResponse } from "axios";
import { baseUrl } from ".";
import { IComponentApi } from "../interfaces/component.interface";

export const deleteComponent = async (
  component: IComponentApi
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.delete(
      `${baseUrl}/components/${component.id}`
    );
    return response;
  } catch (error) {
    console.error("Error deleting component:", error);
    throw error;
  }
};
