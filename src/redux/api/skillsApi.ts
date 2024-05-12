import { baseApi } from "./baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkillIntoDb: build.mutation({
      query: (cartFishes) => ({
        url: "/skills/create-skill",
        method: "POST",
        body: cartFishes,
      }),
      invalidatesTags: ["skill"],
    }),

    getAllSkillsFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/skills",
        method: "GET",
        params: arg,
      }),
      providesTags: ["skill"],
    }),
  }),
});

export const { useCreateSkillIntoDbMutation, useGetAllSkillsFromDbQuery } =
  skillsApi;
