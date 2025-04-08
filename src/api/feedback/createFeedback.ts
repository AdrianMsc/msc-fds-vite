import axios, { AxiosResponse } from 'axios';
import { IFormStateFB } from '../../redux/slices/feedbackFormSlice';

export const createFeedback = async (data: IFormStateFB): Promise<AxiosResponse<any>> => {
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
