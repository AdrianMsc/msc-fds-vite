import { AxiosResponse } from 'axios';
import { api } from '.';
import { IActivityHistoryResponse } from '../interfaces/activity.interface';

interface GetComponentHistoryParams {
	page?: number;
	pageSize?: number;
	action?: string;
	componentId?: number | '';
	startDate?: string;
	endDate?: string;
}

export const getComponentHistory = async (
	params: GetComponentHistoryParams
): Promise<AxiosResponse<IActivityHistoryResponse>> => {
	const response = await api.get<IActivityHistoryResponse>('/components/history', {
		params: {
			page: params.page ?? 1,
			pageSize: params.pageSize ?? 20,
			action: params.action || undefined,
			componentId: params.componentId || undefined,
			startDate: params.startDate || undefined,
			endDate: params.endDate || undefined
		}
	});

	return response;
};
