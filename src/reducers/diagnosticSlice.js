import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const diagnosticSlice = createSlice({
  name: "diagnos",
  initialState,
  reducers: {
    updateDiagnosState: (state, action) => {
      state.value = action.payload;
      console.log("diagnostic->", state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDiagnosState } = diagnosticSlice.actions;

export default diagnosticSlice.reducer;
