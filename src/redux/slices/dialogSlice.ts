// dialogSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the dialog state
interface DialogState {
	isOpen: boolean;
	title: string;
	text: string;
	onConfirm: (() => void) | null; // Callback or action to run on confirm
}

// Define the initial state
const initialState: DialogState = {
	isOpen: false,
	title: 'Confirmation Dialog',
	text: 'Test',
	onConfirm: null
};

const dialogSlice = createSlice({
	name: 'dialog',
	initialState,
	reducers: {
		openDialog: (
			state,
			action: PayloadAction<{
				title?: string;
				text?: string;
				onConfirm?: (() => void) | null; // Action callback to be triggered on confirm
			}>
		) => {
			state.isOpen = true;
			const { title, text, onConfirm } = action.payload;
			if (title) state.title = title;
			if (text) state.text = text;
			if (onConfirm !== undefined) state.onConfirm = onConfirm;
		},
		closeDialog: (state) => {
			state.isOpen = false;
			state.onConfirm = null; // Reset the callback
		}
	}
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
