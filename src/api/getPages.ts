import { api } from '.';

export const getHomePageApi = async () => {
  try {
    const response = await api.get(`/lab/homepage-v2/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage:', error);
    throw error;
  }
};

export const getPdpPageApi = async () => {
  try {
    const response = await api.get(`/lab/pdp-v2/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pdp page:', error);
    throw error;
  }
};
