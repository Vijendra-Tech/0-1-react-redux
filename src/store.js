import { configureStore } from "@reduxjs/toolkit";
import sampleName from "./sampleSlice";
import fakeName from "./fakeInfoSlice";
import { githubApi } from "./githubApiService";

const store = configureStore({
  reducer: { sampleName, fakeName, [githubApi.reducerPath]: githubApi.reducer },
  middleware: (getDefaultMiddleW) =>
    getDefaultMiddleW().concat(githubApi.middleware),
});

export default store;
