import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, nameState } from "./types";

export const sectorSlice = createSlice({
	name: nameState,
	initialState,
	reducers: {
		setSectorSelected(state, action: PayloadAction<any>) {
			return {
				allSectors: state.allSectors,
				selectedSector: action.payload,
			};
		},

		clearSectorSelected(state, action: PayloadAction<any>) {
			return { ...state, selectedSector: { key: "", label: "" } };
		},

		setAllSectors(state, action: PayloadAction<any>) {
			return {
				allSectors: action.payload,
				selectedSector: state.selectedSector,
			};
		},

		clearAllDatasSectors() {
			return initialState;
		},
	},
});

export default sectorSlice.reducer;
