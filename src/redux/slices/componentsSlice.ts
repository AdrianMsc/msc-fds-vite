import { createSlice } from "@reduxjs/toolkit";
import { ICategoryApi } from "../../interfaces/component.interface";

const initialState: ICategoryApi[] = [];

export const componentSlice = createSlice({
  name: "componentsReducer",
  initialState,
  reducers: {
    getComponents: (state, action) => {
      return action.payload;
    },
    addComponent: (state, action) => {
      console.log("Component Created", action.payload);
    },
  },
});

export const { addComponent, getComponents } = componentSlice.actions;
export default componentSlice.reducer;
