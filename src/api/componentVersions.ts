import { api } from '.';

export const getComponentVersionsApi = async (componentId: number) => {
  try {
    const response = await api.get(`/components/${componentId}/versions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching component versions:', error);
    throw error;
  }
};

export const getLatestVersionApi = async (componentId: number) => {
  try {
    const response = await api.get(`/components/${componentId}/versions/latest`);
    return response.data;
  } catch (error) {
    console.error('Error fetching latest version:', error);
    throw error;
  }
};

export const createVersionApi = async (componentId: number, version: string) => {
  try {
    const response = await api.post(`/components/${componentId}/versions`, { version });
    return response.data;
  } catch (error) {
    console.error('Error creating version:', error);
    throw error;
  }
};

export const updateVersionApi = async (versionId: number, version: string) => {
  try {
    const response = await api.put(`/versions/${versionId}`, { version });
    return response.data;
  } catch (error) {
    console.error('Error updating version:', error);
    throw error;
  }
};

export const deleteVersionApi = async (versionId: number) => {
  try {
    const response = await api.delete(`/versions/${versionId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting version:', error);
    throw error;
  }
};

export const setLatestVersionApi = async (versionId: number) => {
  try {
    const response = await api.put(`/versions/${versionId}/set-latest`);
    return response.data;
  } catch (error) {
    console.error('Error setting latest version:', error);
    throw error;
  }
};

export const getComponentByIdApi = async (id: number, versionId?: number) => {
  try {
    const params = versionId ? { versionId } : {};
    const response = await api.get(`/components/${id}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching component:', error);
    throw error;
  }
};
