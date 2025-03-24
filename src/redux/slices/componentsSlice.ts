import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryApi, IComponentApi, IComponentForm } from '../../interfaces/component.interface';
import { createComponent } from '../../api/createComponent';
import { deleteComponent } from '../../api/deleteComponent';
import { updateComponent } from '../../api/updateComponent';

const initialState: ICategoryApi[] = [];

export const updateComponentThunk = createAsyncThunk(
	'components/updateComponent',
	async (data: IComponentForm, { rejectWithValue }) => {
		try {
			const response = await updateComponent(data);
			if (response.status === 200) {
				return data;
			}
			return rejectWithValue('Failed to update component');
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addComponent = createAsyncThunk(
	'components/addComponent',
	async (data: IComponentForm, { rejectWithValue }) => {
		try {
			const response = await createComponent(data);
			if (response.status === 201) {
				const newComponent = {
					id: response.data.componentId,
					name: data.name,
					comment: data.comment,
					description: '',
					category: data.category,
					statuses: [
						{
							guidelines: data.guidelines,
							figma: data.figma,
							storybook: data.storybook,
							cdn: data.cdn
						}
					]
				};
				return newComponent;
			} else {
				return rejectWithValue('Failed to create component');
			}
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const removeComponent = createAsyncThunk(
	'components/removeComponent',
	async (component: IComponentApi, { rejectWithValue }) => {
		try {
			const response = await deleteComponent(component);
			if (response.status === 200) {
				return component;
			} else {
				return rejectWithValue('Failed to delete component');
			}
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const editComponent = createAsyncThunk(
	'components/editComponent',
	async (data: IComponentForm, { rejectWithValue }) => {
		try {
			console.log(data);
			const response = await updateComponent(data);
			if (response.status === 200) {
				console.log(response);
				return response.data;
			} else {
				return rejectWithValue('Failed to edit component');
			}
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const componentSlice = createSlice({
	name: 'componentsReducer',
	initialState,
	reducers: {
		setComponentsState: (_, action: PayloadAction<ICategoryApi[]>) => {
			return action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(addComponent.fulfilled, (state, action: PayloadAction<IComponentApi>) => {
				return state.map((item) => {
					if (item.category === action.payload.category) {
						return {
							...item,
							components: [...item.components, action.payload]
						};
					}
					return item;
				});
			})
			.addCase(addComponent.rejected, (_, action) => {
				console.error('Error adding component:', action.payload);
			})
			.addCase(removeComponent.fulfilled, (state, action: PayloadAction<IComponentApi>) => {
				return state.map((item) => {
					if (item.category === action.payload.category) {
						return {
							...item,
							components: item.components.filter((comp) => comp.id !== action.payload.id)
						};
					}
					return item;
				});
			})
			.addCase(removeComponent.rejected, (_, action) => {
				console.error('Error deleting component:', action.payload);
			})
			.addCase(editComponent.fulfilled, (state, action: PayloadAction<IComponentForm>) => {
				const formmatedComponent = {
					id: Number(action.payload.id),
					name: action.payload.name,
					comment: action.payload.comment,
					category: action.payload.category,
					statuses: [
						{
							guidelines: action.payload.guidelines,
							figma: action.payload.figma,
							storybook: action.payload.storybook,
							cdn: action.payload.cdn
						}
					]
				};
				const category = state.find((item) => item.category === formmatedComponent.category);
				if (category) {
					const index = category.components.findIndex((comp) => comp.id === formmatedComponent.id);
					if (index !== -1) {
						category.components[index] = formmatedComponent;
					}
				}
			})
			.addCase(editComponent.rejected, (_, action) => {
				console.error('Error editing component:', action.payload);
			})
			.addCase(updateComponentThunk.fulfilled, (state, action: PayloadAction<IComponentForm>) => {
				const updatedComponent = {
					id: Number(action.payload.id),
					name: action.payload.name,
					comment: action.payload.comment,
					category: action.payload.category,
					statuses: [
						{
							guidelines: action.payload.guidelines,
							figma: action.payload.figma,
							storybook: action.payload.storybook,
							cdn: action.payload.cdn
						}
					]
				};
				return state.map((item) => {
					if (item.category === updatedComponent.category) {
						return {
							...item,
							components: item.components.map((comp) =>
								comp.id === updatedComponent.id ? updatedComponent : comp
							)
						};
					}
					return item;
				});
			})
			.addCase(updateComponentThunk.rejected, (_, action) => {
				console.error('Error updating component:', action.payload);
			});
	}
});

export const { setComponentsState } = componentSlice.actions;
export default componentSlice.reducer;
