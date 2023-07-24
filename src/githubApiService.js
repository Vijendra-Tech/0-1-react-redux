import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users" }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (handle) => ({ url: `${handle}` }),
      //   transformResponse: (res) => res.json(),
    }),
    getRepo: builder.query({
      query: (handle) => ({ url: `${handle}/repos` }),
    }),
  }),
});

export const { useGetUserDetailsQuery, useGetRepoQuery } = githubApi;
