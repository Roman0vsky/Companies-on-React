import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { ICatalog } from "src/utils/interfaces/catalog.interface";

const CatalogService = {
  getFullCatalog: async (): Promise<ICatalog[]> => {
    try {
      const response = await client.get(`${API_ENDPOINTS.CATALOG}`);
      const data: ICatalog[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  getCatalog: async ({
    id,
    name,
  }: {
    id?: number;
    name?: string;
  }): Promise<ICatalog[]> => {
    try {
      const response = await client.get(
        `${API_ENDPOINTS.CATALOG}?${name ? `name=${name}` : ""}`
      );
      const data: ICatalog[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};

export default CatalogService;
