import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFormStateFB {
	id: string;
	name: string;
	email: string;
	message: string;
}

const initialState: IFormStateFB = {
	id: '',
	name: '',
	email: '',
	message: ''
};

const feedbackFormSlice = createSlice({
	name: 'feedbackForm',
	initialState,
	reducers: {
		updateField: (state, action: PayloadAction<{ field: keyof IFormStateFB; value: string }>) => {
			const { field, value } = action.payload;
			state[field] = value;
		},
		resetForm: () => initialState
	}
});

export const { updateField, resetForm } = feedbackFormSlice.actions;
export default feedbackFormSlice.reducer;
