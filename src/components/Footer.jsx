import React from "react";

export default function Footer() {
	return (
		<footer className="text-white" style={{ backgroundColor: "#0e4b80" }}>
			<div className="SnipShop blog">
				<section className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5>Shop</h5>

							<ul className="list-unstyled mb-0">
								<li>
									<a href="#!" className="text-white">
										Gift cards
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										SnipShop blog
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5>Sell</h5>

							<ul className="list-unstyled mb-0">
								<li>
									<a href="#!" className="text-white">
										Sell on SnipShop
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Terms
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Forums
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Affiliates
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5>About</h5>

							<ul className="list-unstyled mb-0">
								<li>
									<a href="#!" className="text-white">
										SnipShop, Inc.
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Policies
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Investors
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Careers
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Press
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Impact
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5>Help</h5>

							<ul className="list-unstyled mb-0">
								<li>
									<a href="#!" className="text-white">
										Help center
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Trust and safety
									</a>
								</li>
								<li>
									<a href="#!" className="text-white">
										Privacy settings
									</a>
								</li>
								<li>
									<div className="download-button d-flex mt-4 mb-1">
										<img
											className="download-button-item px-1"
											alt=""
											src="./assets/images/group-3.svg"
										/>
										<div className="download-the-snipshop px-1">
											Download the SnipShop App
										</div>
									</div>
								</li>
								<li>
									<section className="mb-4">
										<a
											className="btn btn-outline-light btn-floating m-1 btn-sm border-rounded"
											href="#!"
											role="button"
										>
											<i className="fab fa-facebook-f"></i>
										</a>

										<a
											className="btn btn-outline-light btn-floating m-1 btn-sm border-rounded"
											href="#!"
											role="button"
										>
											<i className="fab fa-twitter"></i>
										</a>

										<a
											className="btn btn-outline-light btn-floating m-1 btn-sm border-rounded"
											href="#!"
											role="button"
										>
											<i className="fab fa-google"></i>
										</a>

										<a
											className="btn btn-outline-light btn-floating m-1 btn-sm border-rounded"
											href="#!"
											role="button"
										>
											<i className="fab fa-instagram"></i>
										</a>

										<a
											className="btn btn-outline-light btn-floating m-1 btn-sm border-rounded"
											href="#!"
											role="button"
										>
											<i className="fab fa-linkedin-in"></i>
										</a>
									</section>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
			<div className="text-center p-3" style={{ backgroundColor: "#232347" }}>
				<div className="container px-0">
					<div className="row">
						<div className="col-md-6 text-left">
							© 2021-2023
							<a className="text-white" href="#">
								SnipShop.com
							</a>
						</div>
						<div className="col-md-6 text-right">
							<ul className="list-style-none d-flex float-right">
								<li>Terms of use</li>
								<li>Privacy</li>
								<li>Interest-based ads</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
