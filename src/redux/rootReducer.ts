import { combineReducers } from "@reduxjs/toolkit";
import componentsReducer from "./slices/componentsSlice";

const rootReducer = combineReducers({
  components: componentsReducer,
});

export default rootReducer;
