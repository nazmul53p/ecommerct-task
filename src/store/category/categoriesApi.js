import basicServiceApi from "../../utils/basicServiceApi";

export const categoryApi = basicServiceApi
	.enhanceEndpoints({ addTagTypes: ["category"] })
	.injectEndpoints({
		endpoints: (builder) => ({
			getCategories: builder.query({
				query: () => ({
					url: "products/categories",
					method: "GET",
					responseHandler: async (response) => {
						return await response.json();
					},
				}),
				providesTags: (result) => {
					return result
						? [
								...result.map(({ id }) => ({
									type: "category",
									id,
								})),
								{ type: "category", id: "LIST" },
						  ]
						: [{ type: "category", id: "LIST" }];
				},

				// ? Transform the result to prevent nested data
				transformResponse: (response) =>
					response.map((item, i) => ({ id: i + 1, name: item })),
			}),

			getProductOfACategory: builder.query({
				query(category) {
					return `products/category/${category}`;
				},
				transformResponse: (response, args, meta) => response.products,
				providesTags: (result, error, id) => [{ type: "category", id }],
			}),
		}),
	});

export const { useGetProductOfACategoryQuery, useGetCategoriesQuery } = categoryApi;
