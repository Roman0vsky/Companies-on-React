import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { ICatalog } from "src/utils/interfaces/catalog.interface";

interface IGetCompanies {
  catalogName?: string;
}
interface IGetCompany extends IGetCompanies {
  id: number;
}

const ReviewsService = {
  getCompanies: async ({ catalogName }: IGetCompanies): Promise<any> => {
    try {
      const response = await client.get(`${API_ENDPOINTS.COMPANIES}?company`);
      const data: any[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default ReviewsService;
