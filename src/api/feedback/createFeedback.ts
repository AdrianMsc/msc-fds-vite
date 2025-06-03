import axios, { AxiosResponse } from "axios";
import { IFeedback } from "../../redux/slices/feedbackSlice";
import { baseUrl } from "..";

export const createFeedback = async (
  data: IFeedback
): Promise<AxiosResponse<any>> => {
  try {
    const dataCasted = {
      ...data,
      id: Number(data.id),
      status: "pending",
      read: false,
    };
    const response = await axios.post(baseUrl, dataCasted);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating component:", error);
    throw error;
  }
};
