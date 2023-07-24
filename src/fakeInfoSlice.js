import { createSlice } from "@reduxjs/toolkit";

const FakeNameSlice = createSlice({
  name: "fakeName",
  initialState: {
    value: {
      title: "Cat Pillow ",
      price: "$" + 10,
    },
  },
  reducers: {
    updatePrice: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updatePrice } = FakeNameSlice.actions;
export default FakeNameSlice.reducer;
