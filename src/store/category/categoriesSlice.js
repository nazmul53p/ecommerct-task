import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categories: [],
	categoryWiseProducts: [],
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
		setCategoryWiseProducts: (state, action) => {
			state.categoryWiseProducts = action.payload;
		},
	},
});

export const { setCategories, setCategoryWiseProducts } = categoriesSlice.actions;
export default categoriesSlice.reducer;
