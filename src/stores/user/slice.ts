import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, nameState } from "./types";

export const userSlice = createSlice({
	name: nameState,
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<any>) {
			return {
				...state,
				...action.payload,
			};
		},

		clearUser() {
			return initialState;
		},
	},
});

export default userSlice.reducer;
