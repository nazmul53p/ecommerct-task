import React from "react";
import Swiper from "../hooks/swiper";
const categories = [
	{
		id: 1,
		name: "Wireless Headphones",
		price: 56.0,
		discount_price: 66.0,
		image: "./assets/images/headphone.png",
	},
	{
		id: 2,
		name: "Smart Television",
		price: 98.0,
		discount_price: 100.0,
		image: "./assets/images/tv.png",
	},
	{
		id: 3,
		discount_price: 45.0,
		price: 55.0,
		image: "./assets/images/sofa.png",
	},
	{
		id: 4,
		name: "Discount On Sports Equipment",
		discount_price: 45.0,
		price: 55.0,
		image: "./assets/images/sofa.png",
	},
];
const Categories = () => {
	const { prevPosition, nextPosition, handlePrev, handleNext } = Swiper(3, categories);

	const slicedArray = categories.slice(prevPosition, nextPosition);

	return (
		<section className="category">
			<div className="container text-left">
				<h3 className="title-primary">Shop by Category</h3>
				<br />
				<div className="trending-headerbar">
					<p className="subtitle-primary">
						Life is hard enough already. Let us make it a
						<br /> little easier.
					</p>
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
				<div className="row card-wrapper">
					{slicedArray.map((item) => (
						<div className="col-md-4" key={item.id}>
							<div className="card p-5">
								<img className="img-responsive" alt="" src={item.image} />
								<div className="card-title">{item.name}</div>
								<div className="row">
									<div className="d-flex col-md-6 justify-content-between">
										<div className="left">${item.discount_price}</div>
										<div className="right">${item.price}</div>
									</div>
									<div className="col-md-6 text-right">
										<i className="add-icon fa fa-plus" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
