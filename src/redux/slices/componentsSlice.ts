import { createSlice } from "@reduxjs/toolkit";
import { ICategoryApi } from "../../interfaces/component.interface";

const initialState: ICategoryApi[] = [];

export const componentSlice = createSlice({
  name: "componentsReducer",
  initialState,
  reducers: {
    getComponents: (_, action) => {
      return action.payload;
    },
  },
});

export const { getComponents } = componentSlice.actions;
export default componentSlice.reducer;
