import { configureStore } from "@reduxjs/toolkit";
import diagnosticReducer from "../reducers/diagnosticSlice";

export const store = configureStore({
  reducer: {
    diagnostic: diagnosticReducer,
  },
});
