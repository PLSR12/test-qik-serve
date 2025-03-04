import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../stores/store";
import {
	ICartItem,
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
} from "../stores/cart/slice";

export const useCart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: AppState) => state.cart.items);

	return {
		cartItems,
		addItem: (item: Omit<ICartItem, "quantity">) => dispatch(addItem(item)),
		removeItem: (id: string) => dispatch(removeItem(id)),
		increaseQuantity: (id: string) => dispatch(increaseQuantity(id)),
		decreaseQuantity: (id: string) => dispatch(decreaseQuantity(id)),
	};
};
