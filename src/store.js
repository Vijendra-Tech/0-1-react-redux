import { configureStore } from "@reduxjs/toolkit";
import sampleName from "./sampleSlice";
import fakeName from './fakeInfoSlice'

const store = configureStore({
  reducer: { sampleName ,fakeName},
});

export default store;
