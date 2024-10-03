import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bistro-boss-server-one-iota.vercel.app/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (name) => ({
        url: "/menu",
        method: "GET",
      }),
    }),
  }),
});

// export const { useGetPokemonByNameQuery } = baseApi;
