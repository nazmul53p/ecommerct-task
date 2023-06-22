import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./auth/authApi";
import authReducer from "./auth/authSlice";
import { categoryApi } from "./category/categoriesApi";
import categoryReducer from "./category/categoriesSlice";
import configReducer from "./config/configSlice";
import { productsApi } from "./products/productsApi";
import productsReducer from "./products/productsSlice";

const store = configureStore({
	devTools: process.env.NODE_ENV !== "production",
	reducer: {
		config: configReducer,
		products: productsReducer,
		auth: authReducer,
		categories: categoryReducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			productsApi.middleware,
			categoryApi.middleware,
			authApi.middleware,
		]),
});

export default store;
