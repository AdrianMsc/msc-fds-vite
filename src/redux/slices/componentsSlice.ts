import { createSlice } from '@reduxjs/toolkit';
import { ICategoryApi } from '../../interfaces/component.interface';

const initialState: ICategoryApi[] = [];

export const componentSlice = createSlice({
	name: 'componentsReducer',
	initialState,
	reducers: {
		setComponentsState: (_, action) => {
			return action.payload;
		},
		deleteComponentAction: (state, action) => {
			console.log(action.payload);
			return state.map((item) => {
				if (item.category === action.payload.category) {
					return {
						...item,
						components: item.components.filter((comp) => comp.name !== action.payload.name)
					};
				}
				return item;
			});
		}
	}
});

export const { setComponentsState, deleteComponentAction } = componentSlice.actions;
export default componentSlice.reducer;
