import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./features/basicSlice";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    basic: basicReducer,
    todo: todoReducer,
  },
});
