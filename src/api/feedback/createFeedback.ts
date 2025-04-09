import axios, { AxiosResponse } from 'axios';
import { IFeedback } from '../../redux/slices/feedbackSlice';

export const createFeedback = async (data: IFeedback): Promise<AxiosResponse<any>> => {
	try {
		const dataCasted = {
			...data,
			id: Number(data.id),
			status: 'pending',
			read: false
		};
		const response = await axios.post(`https://msc-component-status-ws.vercel.app/message/`, dataCasted);
		console.log(response);
		return response;
	} catch (error) {
		console.error('Error creating component:', error);
		throw error;
	}
};
