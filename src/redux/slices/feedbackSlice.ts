import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createFeedback } from '../../api/feedback/createFeedback';

export interface IFeedback {
	id?: number;
	name: string;
	email: string;
	message: string;
	created_at?: string;
	status?: string;
	read?: boolean;
}

const initialState: IFeedback[] = [];

// ADD ASYNC
export const addFeedback = createAsyncThunk('feedback/addFeedback', async (data: IFeedback, { rejectWithValue }) => {
	try {
		const response = await createFeedback(data);
		if (response.status === 201) {
			const newFeedback = {
				id: response.data.id,
				name: data.name,
				email: data.email,
				message: data.message,
				created_at: data.created_at,
				status: data.status,
				read: data.read
			};
			return newFeedback;
		} else {
			return rejectWithValue('Failed to create component');
		}
	} catch (error: any) {
		return rejectWithValue(error.response.data);
	}
});

export const componentSlice = createSlice({
	name: 'feedbackReducer',
	initialState,
	reducers: {
		setFeedback: (_, action: PayloadAction<IFeedback[]>) => {
			return action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			// ADD CASE
			.addCase(addFeedback.fulfilled, (state, action: PayloadAction<IFeedback>) => {
				return [...state, action.payload];
			})
			.addCase(addFeedback.rejected, (_, action) => {
				console.error('Error adding component:', action.payload);
			});
	}
});

export const { setFeedback } = componentSlice.actions;
export default componentSlice.reducer;
