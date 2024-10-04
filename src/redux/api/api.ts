import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bistro-boss-server-one-iota.vercel.app/",
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => ({
        url: "/menu",
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetMenuQuery, useAddTodoMutation } = baseApi;

// export const { useGetPokemonByNameQuery } = baseApi;
