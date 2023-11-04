import { TSignup } from "./../../utils/validation/auth";
import { getData, postData } from "../crud";

const endpoint = "auth";

export interface IAuth {
  email: string;
  username: string;
  accessToken: string;
  roles: string[];
  teamId: number | null;
  image: string | null;
}

export interface IApiResponse<T> {
  message: string;
  data: T;
}

const getCurrentUser = async (): Promise<IApiResponse<IAuth>> => {
  return await getData(endpoint);
};

const signup = async (data: TSignup): Promise<IApiResponse<IAuth>> => {
  return await postData(endpoint + "/register", data);
};

const signin = async (data: TSignup): Promise<IApiResponse<IAuth>> => {
  return await postData(endpoint + "/login", data);
};

export default {
  signin,
  signup,
  getCurrentUser,
};
