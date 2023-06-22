import React from "react";
import HorizontalSlider from "./HorizontalSlider";
import VerticalSlider from "./VerticalSlider";
export default function Sliders() {
	const menus = [
		{ id: 1, title: "Jewelry & Accessories", link: "#" },
		{ id: 2, title: "Clothing & Shoes", link: "#" },
		{ id: 3, title: "Home & Living", link: "#" },
		{ id: 4, title: "Wedding & Party", link: "#" },
		{ id: 5, title: "Toys & Entertainment", link: "#" },
		{ id: 6, title: "Art & Collectibles", link: "#" },
		{ id: 7, title: "Craft Supplies & Tools", link: "#" },
		{ id: 8, title: "Vintage", link: "#" },
	];
	return (
		<section className="slider banner">
			<div className="container-fluid px-5">
				<ul className="list-group list-group-horizontal justify-content-between">
					{menus.map((item) => (
						<li
							className={item.id === 2 ? "nav-link active" : "nav-link"}
							key={item.id}
						>
							<a href={item.link}>{item.title}</a>
						</li>
					))}
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
									<span className="h2 font-weight-bold">110.00$</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-8">
								<HorizontalSlider />
							</div>
							<div className="col-md-4 text-center mt-4">
								<VerticalSlider />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
