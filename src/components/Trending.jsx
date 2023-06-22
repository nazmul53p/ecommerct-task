import React from "react";
import Swiper from "../hooks/swiper";
const categories = [
	{
		id: 1,
		name: "Seven Zero Five",
		price: 10.0,
		image: "./assets/images/imageremovebgpreview-55-1@2x.png",
	},
	{
		id: 2,
		name: "Clock",
		price: 25.0,
		image: "./assets/images/imageremovebgpreview-57-1@2x.png",
	},
	{
		id: 3,
		name: "Curology",
		price: 12.0,
		image: "./assets/images/imageremovebgpreview-58-1@2x.png",
	},
	{
		id: 4,
		name: "Chair",
		price: 16.0,
		image: "./assets/images/imageremovebgpreview-59-1@2x.png",
	},
	{
		id: 5,
		name: "Curology",
		price: 60.0,
		image: "./assets/images/imageremovebgpreview-60-1@2x.png",
	},
	{
		id: 6,
		name: "Curology2",
		price: 60.0,
		image: "./assets/images/imageremovebgpreview-60-1@2x.png",
	},
];
const Trending = () => {
	const { prevPosition, nextPosition, handlePrev, handleNext } = Swiper(5, categories);

	const slicedArray = categories.slice(prevPosition, nextPosition);

	const content = slicedArray.map((item) => (
		<div className="col" key={item.id}>
			<div className="card">
				<div className="row">
					<div className="col-md-6 text-left py-4 pl-5">
						<h5>{item.name}</h5>
						<h6>Starting</h6>
						<div className="card-price">${item.price}</div>
					</div>
					<div className="col-md-6">
						<img className="card-image" alt="" src={item.image} />
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<>
			<section className="trending text-center">
				<div className="container">
					<h3 className="title-primary">Shop Our Trending Products</h3>
					<br />
					<p className="subtitle-primary">
						Life is hard enough already. Let us make it a
						<br /> little easier.
					</p>
					<div className="trending-headerbar">
						<ul
							className="nav nav-tabs justify-content-center"
							id="myTab"
							role="tablist"
						>
							<li className="nav-item">
								<a
									className="nav-link text-dark active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true"
								>
									Fashion
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-dark"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false"
								>
									Technology
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-dark"
									id="contact-tab"
									data-toggle="tab"
									href="#contact"
									role="tab"
									aria-controls="contact"
									aria-selected="false"
								>
									Interiors
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-dark"
									id="contact-tab"
									data-toggle="tab"
									href="#contact"
									role="tab"
									aria-controls="contact"
									aria-selected="false"
								>
									Food &amp; Drink
								</a>
							</li>
						</ul>
						<div className="navigation">
							<span onClick={handlePrev}>
								<i
									className={
										prevPosition === 0
											? "fa fa-angle-left nav-left "
											: "fa fa-angle-left nav-left active"
									}
									aria-hidden="true"
								></i>
							</span>
							<span onClick={handleNext}>
								<i
									className={
										nextPosition > categories.length
											? "fa fa-angle-right nav-right "
											: "fa fa-angle-right nav-right active"
									}
									aria-hidden="true"
								></i>
							</span>
						</div>
					</div>

					<div className="tab-content text-center" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<div className="row">{content}</div>
						</div>
						<div
							className="tab-pane fade"
							id="profile"
							role="tabpanel"
							aria-labelledby="profile-tab"
						>
							<div className="row">{content}</div>
						</div>
						<div
							className="tab-pane fade"
							id="contact"
							role="tabpanel"
							aria-labelledby="contact-tab"
						>
							<div className="row">{content}</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Trending;
