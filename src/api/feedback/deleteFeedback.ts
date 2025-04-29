import axios, { AxiosResponse } from "axios";
import { IFeedback } from "../../redux/slices/feedbackSlice";
import { baseUrl } from "..";

export const deleteFeedback = async (
  feedback: IFeedback
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.delete(`${baseUrl}/message/${feedback.id}`);
    return response;
  } catch (error) {
    console.error("Error deleting feedback:", error);
    throw error;
  }
};
