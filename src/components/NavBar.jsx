import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../store/auth/authApi";
import { userInfo } from "../store/auth/authSlice";
import {
	useGetCategoriesQuery,
	useGetProductOfACategoryQuery,
} from "../store/category/categoriesApi";
import { setCategories, setCategoryWiseProducts } from "../store/category/categoriesSlice";
import { useGetProductsQuery } from "../store/products/productsApi";
import { setProducts } from "../store/products/productsSlice";

export default function NavBar() {
	const dispatch = useDispatch();
	// eslint-disable-next-line no-unused-vars
	const [login, { isLoading }] = useLoginMutation();
	const { data: products } = useGetProductsQuery();
	const { data: categories } = useGetCategoriesQuery();
	const { data: categoryWiseProducts } = useGetProductOfACategoryQuery("smartphones");
	dispatch(setProducts(products));
	dispatch(setCategories(categories));
	dispatch(setCategoryWiseProducts(categoryWiseProducts));

	useEffect(() => {
		async function fetchData() {
			const user = await login({
				username: "kminchelle",
				password: "0lelplR",
				expiresInMins: 1, // optional
			});

			dispatch(userInfo(user.data));
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-custom bg-custom py-3">
				<div className="container-fluid px-5">
					<a className="navbar-brand flex-grow-1" href="/">
						<img src="assets/images/Logo.png" alt="Logo" />
					</a>
					<div className="flex-grow-1 d-flex">
						<form className="form-inline flex-nowrap bg-light mx-0 mx-lg-auto rounded w-100">
							<input
								className="form-control border-transparent py-0 w-100"
								type="search"
								placeholder="Search SnipShop.com"
								aria-label="Search"
							/>
							<button className="btn search-bg px-4 py-1" type="submit">
								<i className="fa fa-search text-white"></i>
							</button>
						</form>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link text-white" href="/">
								<i className="far fa-user mr-2"></i>Account
							</a>
							<a className="nav-item nav-link text-white" href="/">
								<i className="far fa-heart mr-2"></i>My Items
							</a>
							<a className="nav-item nav-link text-white" href="/">
								<i className="fa fa-shopping-bag"></i>
								<sup>
									<span className="badge cart-badge text-dark">4</span>
								</sup>
							</a>
							<a className="nav-item nav-link text-white" href="/">
								<i className="fa fa-bars"></i>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
