import axios from "axios";
import { baseUrl } from ".";

export const getComponentsApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/components`);
    return response.data;
  } catch (error) {
    console.error("Error fetching components:", error);
    throw error;
  }
};
