import { decodedToken } from "@/utils/decodedToken";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

// store user info to local storage
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("accessToken", accessToken);
};

// get user info from local storage
export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return decodedData;
  }
};

// remove user
export const removeUser = () => {
  return removeFromLocalStorage("accessToken");
};
