import React from "react";

export default function NavBar() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-custom bg-custom py-3">
				<div className="container-fluid px-5">
					<a className="navbar-brand flex-grow-1" href="#">
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
							<a className="nav-item nav-link text-white" href="#">
								<i className="far fa-user mr-2"></i>Account
							</a>
							<a className="nav-item nav-link text-white" href="#">
								<i className="far fa-heart mr-2"></i>My Items
							</a>
							<a className="nav-item nav-link text-white" href="#">
								<i className="fa fa-shopping-bag"></i>
								<sup>
									<span className="badge cart-badge text-dark">4</span>
								</sup>
							</a>
							<a className="nav-item nav-link text-white" href="#">
								<i className="fa fa-bars"></i>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
