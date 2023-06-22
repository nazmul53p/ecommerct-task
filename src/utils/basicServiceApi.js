import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const basicServiceApi = createApi({
	reducerPath: "api",

	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
		prepareHeaders: async (headers, { getState }) => {
			const token = getState()?.user?.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
		validateStatus: (response, body) => {
			if (body.statusCode === 401) {
				localStorage.removeItem("user");

				window.open("/login");

				return false;
			} else {
				return true;
			}
		},
	}),

	tagTypes: [],

	endpoints: () => ({}),
});

export default basicServiceApi;
