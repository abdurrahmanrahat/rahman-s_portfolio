"use server";

import { TLoginUser } from "@/types";

export const loginUser = async (userData: TLoginUser) => {
  const res = await fetch(
    `https://rahmans-portfolio-server.vercel.app/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();

  return userInfo;
};
