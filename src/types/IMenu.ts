export interface IMenuCategory {
	id: string;
	categoryName: string;
	imageUrl: string;
	sets: IMenuItem[];
}

export interface IMenuItem {
	id: number;
	name: string;
	description: string;
	position: number;
	imageUrl: string;
	price: number;
	combo: IMenuCombo;
}

export interface IMenuCombo {
	id: string;
	name: string;
	price: number;
}
