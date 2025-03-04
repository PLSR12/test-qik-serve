import { IMenuCategory } from "../../types/IMenu";
import httpService from "../api";

export const getMenu = async (language: string): Promise<IMenuCategory[]> => {
	const pathMenuByLanguage =
		language === "pt-br" ? "/menuCategoriesPT" : "/menuCategoriesEN";

	const { data } = await httpService.get(pathMenuByLanguage);

	return data;
};
