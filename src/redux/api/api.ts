import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bistro-boss-server-one-iota.vercel.app/",
  }),
  endpoints: (builder) => ({}),
});

// export const { useGetPokemonByNameQuery } = baseApi;
