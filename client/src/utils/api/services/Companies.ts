import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { ICatalog } from "src/utils/interfaces/catalog.interface";
import { ICompany } from "src/utils/interfaces/company.interface";

interface IGetCompanies {
  catalogId?: number;
}
interface IGetCompany extends IGetCompanies {
  id: number;
}

const CompaniesService = {
  getCompanies: async ({ catalogId }: IGetCompanies): Promise<ICompany[]> => {
    try {
      const response = await client.get(
        `${API_ENDPOINTS.COMPANIES}?${
          catalogId ? `catalogId=${catalogId}` : ""
        }`
      );
      const data: ICompany[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  getCompany: async ({ id }: IGetCompany): Promise<ICompany> => {
    try {
      const response = await client.get(`${API_ENDPOINTS.COMPANIES}/${id}`);
      const data: ICompany | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default CompaniesService;
