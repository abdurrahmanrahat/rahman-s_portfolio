import { baseApi } from "./baseApi";

const articlesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createArticleIntoDb: build.mutation({
      query: (cartFishes) => ({
        url: "/articles/create-article",
        method: "POST",
        body: cartFishes,
      }),
      invalidatesTags: ["article"],
    }),

    getAllArticlesFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/articles",
        method: "GET",
        params: arg,
      }),
      providesTags: ["article"],
    }),
  }),
});

export const { useCreateArticleIntoDbMutation, useGetAllArticlesFromDbQuery } =
  articlesApi;
