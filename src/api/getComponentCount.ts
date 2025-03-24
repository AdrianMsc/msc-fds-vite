import axios from "axios";
import { baseUrl } from ".";

export const getComponentsCountApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/count`);
    return response.data;
  } catch (error) {
    console.error("Error counting components:", error);
    throw error;
  }
};
