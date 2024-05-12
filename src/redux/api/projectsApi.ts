import { baseApi } from "./baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProjectIntoDb: build.mutation({
      query: (project) => ({
        url: "/projects/create-project",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["project"],
    }),

    getAllProjectsFromDb: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/projects",
        method: "GET",
        params: arg,
      }),
      providesTags: ["project"],
    }),
  }),
});

export const { useCreateProjectIntoDbMutation, useGetAllProjectsFromDbQuery } =
  projectsApi;
