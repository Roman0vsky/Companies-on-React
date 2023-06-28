import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";

const UsersService = {
  getUser: async (id: number): Promise<IUser> => {
    try {
      const response = await client.get(`${API_ENDPOINTS.USERS}/${id}`);
      const data: IUser | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  updateUser: async (newUser: IUser): Promise<IUser> => {
    try {
      const response = await client.put(
        `${API_ENDPOINTS.USERS}/${newUser.id}`,
        newUser
      );
      const data: IUser | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default UsersService;
