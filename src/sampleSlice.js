import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
  name: "sampleName",
  initialState: {
    value:"VkRana"
  },
  reducers: {
    getSample: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getSample } = sampleSlice.actions;
export default sampleSlice.reducer;
