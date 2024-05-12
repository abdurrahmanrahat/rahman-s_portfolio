import { baseApi } from "./baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkillIntoDb: build.mutation({
      query: (cartFishes) => ({
        url: "/orders",
        method: "POST",
        body: cartFishes,
      }),
      invalidatesTags: ["skill"],
    }),

    getAllSkillsFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/orders",
        method: "GET",
        params: arg,
      }),
      providesTags: ["skill"],
    }),
  }),
});

export const { useCreateSkillIntoDbMutation, useGetAllSkillsFromDbQuery } =
  skillsApi;
