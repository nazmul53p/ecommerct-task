import React from "react";

export default function SliderSection() {
	return (
		<section className="slider banner">
			<div className="container-fluid px-5">
				<ul className="list-group list-group-horizontal justify-content-between">
					<li className="nav-link">
						<a href="#">Jewelry & Accessories</a>
					</li>
					<li className="nav-link active">
						<a href="#">Clothing & Shoes</a>
					</li>
					<li className="nav-link">
						<a href="#">Home & Living</a>
					</li>
					<li className="nav-link">
						<a href="#">Wedding & Party</a>
					</li>
					<li className="nav-link">
						<a href="#">Toys & Entertainment</a>
					</li>
					<li className="nav-link">
						<a href="#">Art & Collectibles</a>
					</li>
					<li className="nav-link">
						<a href="#">Craft Supplies & Tools</a>
					</li>
					<li className="nav-link">
						<a href="#">Vintage</a>
					</li>
				</ul>
			</div>

			<div className="container">
				<div className="row mt-5">
					<div className="col-md-5">
						<h6 className="slider-subtitle mt-5">100% QUALITY, 100% SATISFACTION</h6>
						<h1 className="slider-title">
							Where the world
							<br /> comes to shop.
						</h1>

						<p className="slider-text">
							Life is hard enough already. Let us make it a little
							<br /> easier, Vision of Snipshop for a better outlook.
						</p>
						<div className="row mt-5">
							<div className="col-md-9 mt-5">
								<button type="button" className="slider-btn btn btn-dark">
									SHOP NOW
								</button>
							</div>
							<div className="col-md-3 mt-4 pl-3">
								<p className="start-form">
									Start from <br />
									<spna className="h2 font-weight-bold">110.00$</spna>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-8">
								<img src="assets/images/camera.png" alt="banner" />
								<h6 className="text-center mt-5 text-primary cursor-pointer">
									PREV . . . . . NEXT
								</h6>
							</div>
							<div className="col-md-4 text-center mt-4">
								<img src="assets/images/lens.png" alt="lens" />
								<p className="title-sm mb-4">
									Fuji 14mm
									<br /> lens
								</p>
								<img src="assets/images/stand.png" alt="stand" />
								<p className="title-sm">
									Camera
									<br /> stand
								</p>
								<i className="fa fa-chevron-circle-down down-arrow fa-2x"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
