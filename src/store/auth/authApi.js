import basicServiceApi from "../../utils/basicServiceApi";

export const authApi = basicServiceApi.enhanceEndpoints({ addTagTypes: ["auth"] }).injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => {
				return {
					url: "auth/login",
					method: "POST",
					body: data,
				};
			},
			transformResponse: (response) => {
				localStorage.setItem("token", response?.token);
				return response;
			},
		}),
	}),
});

export const { useLoginMutation } = authApi;
