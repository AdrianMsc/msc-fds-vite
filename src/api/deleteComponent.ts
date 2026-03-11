import { AxiosResponse } from 'axios';
import { api } from '.';
import { IComponentApi } from '../interfaces/component.interface';

export const deleteComponent = async (component: IComponentApi): Promise<AxiosResponse<unknown>> => {
  try {
    const response = await api.delete(`/components/${component.id}`);
    return response;
  } catch (error) {
    console.error('Error deleting component:', error);
    throw error;
  }
};
