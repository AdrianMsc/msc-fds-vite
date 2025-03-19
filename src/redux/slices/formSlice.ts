import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFormState {
  id: string;
  name: string;
  category: string;
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
  comment: string;
}

const initialState: IFormState = {
  id: "",
  name: "",
  category: "",
  guidelines: "🧱",
  figma: "🧱",
  storybook: "🧱",
  cdn: "🧱",
  comment: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof IFormState; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => {
      state.id = "";
      state.name = "";
      state.category = "";
      state.guidelines = "";
      state.figma = "";
      state.storybook = "";
      state.cdn = "";
      state.comment = "";
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
