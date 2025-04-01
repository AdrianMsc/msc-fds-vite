import axios from "axios";
import { baseUrl } from ".";

export const getComponentListApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/allcomponents`);
    return response.data;
  } catch (error) {
    console.error("Error fetching components:", error);
    throw error;
  }
};
