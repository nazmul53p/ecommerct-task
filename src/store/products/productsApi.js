import basicServiceApi from "../../utils/basicServiceApi";

export const productsApi = basicServiceApi
	.enhanceEndpoints({ addTagTypes: ["products"] })
	.injectEndpoints({
		endpoints: (builder) => ({
			getProducts: builder.query({
				query: () => ({
					url: "products",
					method: "GET",
					responseHandler: async (response) => {
						return await response.json();
					},
				}),

				providesTags: (result) => {
					return result
						? [
								...result.map(({ productId }) => ({
									type: "products",
									id: productId,
								})),
								{ type: "products", id: "LIST" },
						  ]
						: [{ type: "products", id: "LIST" }];
				},

				// ? Transform the result to prevent nested data
				transformResponse: (response) => {
					return response.products;
				},
			}),
			// ? Query: Get a single product
			getProduct: builder.query({
				query(id) {
					return `products/${id}`;
				},
				transformResponse: (response, args, meta) => response.data,
				providesTags: (result, error, id) => [{ type: "products", id }],
			}),
			// ? Query: Get a single product
			searchProducts: builder.query({
				query(q) {
					return `products/search?q=${q}`;
				},
				transformResponse: (response, args, meta) => response.products,
				providesTags: (result, error, id) => [{ type: "products", id }],
			}),
			// ? Mutation: Create a product
			createProduct: builder.mutation({
				query: (data) => {
					return {
						url: "products",
						method: "POST",
						body: data,
					};
				},
				invalidatesTags: [{ type: "products", id: "LIST" }],
				transformResponse: (response) => {
					return response.product;
				},
			}),
			// ? Mutation: Update Product
			updateProduct: builder.mutation({
				query({ id, formData }) {
					return {
						url: `products/${id}`,
						method: "PATCH",
						body: formData,
					};
				},
				invalidatesTags: (result, error, { id }) =>
					result
						? [
								{ type: "products", id },
								{ type: "products", id: "LIST" },
						  ]
						: [{ type: "products", id: "LIST" }],
				transformResponse: (response) => response.product,
			}),
			// ? Mutation: Delete product
			deleteProduct: builder.mutation({
				query(id) {
					return {
						url: `products/${id}`,
						method: "DELETE",
					};
				},
				invalidatesTags: [{ type: "products", id: "LIST" }],
			}),
		}),
	});

export const {
	useGetProductsQuery,
	useCreateProductMutation,
	useGetProductQuery,
	useDeleteProductMutation,
	useUpdateProductMutation,
} = productsApi;
