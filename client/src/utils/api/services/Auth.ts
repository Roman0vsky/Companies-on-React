import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";

const AuthService = {
  login: async (body: { email: string; password: string }): Promise<IUser> => {
    try {
      const response = await client.post(API_ENDPOINTS.LOGIN, body);
      const data: IBackAuth | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      if (data.accessToken) addItem("token", data.accessToken);

      return data.user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  register: async (body: {
    email: string;
    password: string;
    login: string;
    firstName: string;
    lastName: string;
    roles: string[];
  }): Promise<IUser> => {
    try {
      const response = await client.post(API_ENDPOINTS.REGISTER, body);
      const data: IBackAuth | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      if (data.accessToken) addItem("token", data.accessToken);

      return data.user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default AuthService;
