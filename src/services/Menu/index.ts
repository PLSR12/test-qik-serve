import { IMenuCategory } from "../../types/IMenu";

export const LOCAL_STORAGE_MENU_KEY = "menu";

export const getMenu = (): IMenuCategory[] => {
	if (typeof window === "undefined") return [];
	const data = localStorage.getItem(LOCAL_STORAGE_MENU_KEY);
	return data !== null ? JSON.parse(data) : [];
};

export const saveMenu = (Menu: IMenuCategory[]): void => {
	localStorage.setItem(LOCAL_STORAGE_MENU_KEY, JSON.stringify(Menu));
};

export const addProject = (project: IMenuCategory): void => {
	const Menu = getMenu();
	Menu.push(project);
	saveMenu(Menu);
};

export const updateProject = (
	id: string,
	updatedProject: Partial<IMenuCategory>
): void => {
	const Menu = getMenu();
	const index = Menu.findIndex((project) => project.id === id);
	if (index !== -1) {
		Menu[index] = { ...Menu[index], ...updatedProject };
		saveMenu(Menu);
	}
};

export const deleteProject = (id: string): void => {
	const Menu = getMenu().filter((project) => project.id !== id);
	saveMenu(Menu);
};
