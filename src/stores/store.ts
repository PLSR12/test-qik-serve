import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import languageReducer from "./language/slice";
import cartReducer from "./cart/slice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
	blacklist: [],
};

const reducers = combineReducers({
	language: languageReducer,
	cart: cartReducer,
});

export type RootReducer = ReturnType<typeof reducers>;

const persistedReducer = persistReducer<RootReducer>(persistConfig, reducers);

export const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(),
	});

const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
