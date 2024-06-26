import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rahmans-portfolio-server.vercel.app/api/v1",
  }),
  tagTypes: ["project", "skill", "article", "experience"],
  endpoints: () => ({}),
});
