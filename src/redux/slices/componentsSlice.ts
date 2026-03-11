import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategoryApi,
  IComponentApi,
  IComponentForm,
} from "../../interfaces/component.interface";
import { createComponent } from "../../api/createComponent";
import { deleteComponent } from "../../api/deleteComponent";
import { updateComponent } from "../../api/updateComponent";

const initialState: ICategoryApi[] = [];

// ADD ASYNC
export const addComponent = createAsyncThunk(
  "components/addComponent",
  async (data: IComponentForm, { rejectWithValue }) => {
    try {
      const response = await createComponent(data);
      if (response.status === 201) {
        const newComponent: IComponentApi = {
          id: (response.data as { componentId: number }).componentId,
          name: data.name,
          comment: data.comment,
          description: "",
          category: data.category,
          image:
            typeof data.image === "string"
              ? data.image
              : data.image instanceof File
                ? data.image.name
                : undefined,
          statuses: [
            {
              guidelines: data.guidelines,
              figma: data.figma,
              storybook: data.storybook,
              cdn: data.cdn,
            },
          ],
          createdAt: new Date().toISOString(), // Puedes usar la del backend si la devuelve
          updatedAt: new Date().toISOString(),
          atomicType: data.atomicType || null,
        };

        return newComponent;
      } else {
        return rejectWithValue("Failed to create component");
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: unknown } };
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

// UPDATE ASYNC
export const updateComponentThunk = createAsyncThunk(
  "components/updateComponent",
  async (data: IComponentForm, { rejectWithValue }) => {
    try {
      const response = await updateComponent(data);
      if (response.status === 200) {
        return data;
      }
      return rejectWithValue("Failed to update component");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// REMOVE ASYNC
export const removeComponent = createAsyncThunk(
  "components/removeComponent",
  async (component: IComponentApi, { rejectWithValue }) => {
    try {
      const response = await deleteComponent(component);
      if (response.status === 200) {
        return component;
      } else {
        return rejectWithValue("Failed to delete component");
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: unknown } };
      return rejectWithValue(err.response?.data || "An error occurred");
    }
  }
);

export const componentSlice = createSlice({
  name: "componentsReducer",
  initialState,
  reducers: {
    setComponentsState: (_, action: PayloadAction<ICategoryApi[]>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ADD CASE
      .addCase(
        addComponent.fulfilled,
        (state, action: PayloadAction<IComponentApi>) => {
          return state.map((item) => {
            if (item.category === action.payload.category) {
              return {
                ...item,
                components: [...item.components, action.payload],
              };
            }
            return item;
          });
        }
      )
      .addCase(addComponent.rejected, (_, action) => {
        console.error("Error adding component:", action.payload);
      })
      // UPDATE CASE
      .addCase(
        updateComponentThunk.fulfilled,
        (state, action: PayloadAction<IComponentForm>) => {
          const updatedId = Number(action.payload.id);

          const prevComponent: IComponentApi | undefined = state
            .flatMap((cat) => cat.components)
            .find((c) => c.id === updatedId);

          const baseUpdated: IComponentApi = {
            id: updatedId,
            name: action.payload.name,
            comment: action.payload.comment,
            description:
              action.payload.description ?? prevComponent?.description ?? "",
            category: action.payload.category,
            image: prevComponent?.image, // preserva imagen existente
            statuses: [
              {
                guidelines: action.payload.guidelines,
                figma: action.payload.figma,
                storybook: action.payload.storybook,
                cdn: action.payload.cdn,
              },
            ],
            createdAt: prevComponent?.createdAt ?? "",
            updatedAt: new Date().toISOString(),
            atomicType:
              action.payload.atomicType || prevComponent?.atomicType || null,
          };

          let categoryExists = false;

          const newState = state.map((item) => {
            if (item.category === baseUpdated.category) {
              categoryExists = true;
              return {
                ...item,
                components: item.components.some(
                  (comp) => comp.id === baseUpdated.id
                )
                  ? item.components.map((comp) =>
                      comp.id === baseUpdated.id
                        ? { ...comp, ...baseUpdated }
                        : comp
                    )
                  : [...item.components, baseUpdated], // Add if it doesn't exist
              };
            } else {
              return {
                ...item,
                components: item.components.filter(
                  (comp) => comp.id !== baseUpdated.id
                ), // Remove from old category
              };
            }
          });

          // If the new category didn't exist in the state, add it
          if (!categoryExists) {
            return [
              ...newState,
              {
                category: baseUpdated.category,
                components: [baseUpdated],
              },
            ];
          }

          return newState;
        }
      )
      .addCase(updateComponentThunk.rejected, (_, action) => {
        console.error("Error updating component:", action.payload);
      })
      // REMOVE CASE
      .addCase(
        removeComponent.fulfilled,
        (state, action: PayloadAction<IComponentApi>) => {
          return state.map((item) => {
            if (item.category === action.payload.category) {
              return {
                ...item,
                components: item.components.filter(
                  (comp) => comp.id !== action.payload.id
                ),
              };
            }
            return item;
          });
        }
      )
      .addCase(removeComponent.rejected, (_, action) => {
        console.error("Error deleting component:", action.payload);
      });
  },
});

export const { setComponentsState } = componentSlice.actions;
export default componentSlice.reducer;
