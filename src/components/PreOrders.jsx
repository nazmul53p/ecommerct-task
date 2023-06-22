import React from "react";
import Swiper from "../hooks/swiper";
const products = [
	{
		id: 1,
		name: "Versace",
		price: 285.0,
		image: "./assets/images/versace.png",
		brand: "EROS",
		size: "W",
		gender: "Women",
	},
	{
		id: 2,
		name: "N.5 Chane",
		price: 285.0,
		image: "./assets/images/channel.png",
		brand: "EAU DE PARFUM",
		size: "M",
		gender: "Man",
	},
	{
		id: 3,
		name: "Gabrielle",
		price: 285.0,
		image: "./assets/images/gabrielle.png",
		brand: "CHANEL PARIS",
		size: "W",
		gender: "Man",
	},
	{
		id: 4,
		name: "Gabrielle Demo",
		price: 285.0,
		image: "./assets/images/gabrielle.png",
		brand: "CHANEL PARIS",
		size: "W",
		gender: "Man",
	},
];
const PreOrders = () => {
	const { prevPosition, nextPosition, handlePrev, handleNext } = Swiper(3, products);

	const slicedArray = products.slice(prevPosition, nextPosition);

	const content = slicedArray.map((item) => (
		<div className="col-md-4" key={item.id}>
			<div className="card">
				<img src={item.image} alt="product" className="preorder-image" />
				<div className="preorder-title">{item.name}</div>
				<div className="text-block">
					<span className="catl font-weight-bold">
						{item.brand} - {item.size}{" "}
					</span>
					<span className="catf">
						<span className="span">- </span>
						<span>{item.gender}</span>
					</span>
				</div>
				<div className="price">${item.price} USD</div>
				<div className="btn order-now font-weight-bold">ORDER NOW</div>
			</div>
		</div>
	));

	return (
		<section className="preorder">
			<div className="container text-left">
				<h3 className="title-primary text-center">
					<span className="preorder-main-title">Featured Product For Pre-Order</span>
				</h3>
				<div className="row preorder-body">
					<div className="navs col-md-2">
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
										nextPosition > products.length
											? "fa fa-angle-right nav-right "
											: "fa fa-angle-right nav-right active"
									}
									aria-hidden="true"
								></i>
							</span>
						</div>
					</div>
					<div className="col-md-10">
						<div className="row text-center">{content}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PreOrders;
