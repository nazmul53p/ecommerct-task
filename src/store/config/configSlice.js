import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const configSlice = createSlice({
	name: "configSlice",
	initialState,
	reducers: {
		userInfo: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { logout, userInfo } = configSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default configSlice.reducer;
