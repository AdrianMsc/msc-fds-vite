import axios, { AxiosResponse } from "axios";
import { baseUrl } from ".";
import { IComponentForm } from "../interfaces/component.interface";

export const createComponent = async (
  data: IComponentForm
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(
      `${baseUrl}/categories/${data.category}/components`,
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating component:", error);
    throw error;
  }
};
