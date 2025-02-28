import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import languageReducer from "./language/slice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
	blacklist: [],
};

const reducers = combineReducers({
	user: userSlice.reducer,
	language: languageReducer,
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
