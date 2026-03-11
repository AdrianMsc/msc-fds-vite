import { AxiosResponse } from 'axios';
import { api } from '../../lib/api';
import { IFeedback } from '../../redux/slices/feedbackSlice';

export const createFeedback = async (data: IFeedback): Promise<AxiosResponse<unknown>> => {
  try {
    const dataCasted = {
      ...data,
      id: Number(data.id),
      status: 'pending',
      read: false,
    };
    const response = await api.post(
      `https://msc-component-status-ws-dev.vercel.app/message/`,
      dataCasted,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error creating component:', error);
    throw error;
  }
};
