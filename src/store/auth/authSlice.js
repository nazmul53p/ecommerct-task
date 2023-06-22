import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		// ? Logout the user by returning the initial state
		logout: () => initialState,
		userInfo: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { logout, userInfo } = authSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default authSlice.reducer;
