"use server";

import { cookies } from "next/headers";

export const setAccessToken = (token: string) => {
  cookies().set("accessToken", token);
};
