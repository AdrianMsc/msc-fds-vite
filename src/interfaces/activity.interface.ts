export interface IActivityLog {
	id: number;
	entity: 'component';
	action: 'component.created' | 'component.updated' | 'component.deleted';
	component_id: number | null;
	actor_user_id: number | null;
	actor_email: string | null;
	actor_role: string | null;
	details: Record<string, unknown>;
	created_at: string;
}

export interface IActivityHistoryResponse {
	data: IActivityLog[];
	pagination: {
		page: number;
		pageSize: number;
		total: number;
		totalPages: number;
	};
}
