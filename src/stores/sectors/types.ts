import { IOnlySector } from "@/types/IStores";
import { MenuItemType } from "antd/lib/menu/interface";

export interface IInitialState {
  selectedSector: MenuItemType;
  allSectors: MenuItemType[];
}

export const nameState = "sectors";

export const initialState: IInitialState = {
  selectedSector: { key: "", label: "" },
  allSectors: [],
};
