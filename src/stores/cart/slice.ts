import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuItem } from "../../types/IMenu";

export interface ICartItem extends IMenuItem {
	quantity: number;
}

export interface CartState {
	items: ICartItem[];
	totalPrice: number;
}

const initialState: CartState = {
	items: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Omit<ICartItem, "quantity">>) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (!existingItem) {
				state.items.push({ ...action.payload, quantity: 1 });
			} else {
				existingItem.quantity += 1;
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		increaseQuantity: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) {
				item.quantity += 1;
			}
		},
		decreaseQuantity: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) {
				if (item.quantity > 1) {
					item.quantity -= 1;
				} else {
					state.items = state.items.filter((i) => i.id !== action.payload);
				}
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const {
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
