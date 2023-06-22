import React from "react";

const Explore2 = () => {
	const products = [
		{
			id: 1,
			name: "Versace",
			price: 12.0,
			image: "./assets/images/sunglass.png",
		},
		{
			id: 2,
			name: "Shoe",
			price: 35.0,
			image: "./assets/images/shoe.png",
		},
		{
			id: 3,
			name: "Watch",
			price: 22.0,
			image: "./assets/images/watch.png",
		},
	];
	return (
		<section className="explore2">
			<div className="container">
				<div className="row explore-body">
					<div className="col-md-6 explore-left">
						<h3 className="title-primary">Sell Easily on Socialmedia</h3>
						<p className="subtitle-primary">
							Life is hard enough already. Let us make it a little easier.
						</p>
						<div className="d-flex">
							<div className="font-weight-bold mr-2">See All</div>
							<img
								className="right-icon1"
								alt="arrow"
								src="./assets/images/left1.svg"
							/>
						</div>
					</div>
					<div className="col-md-6 brands_color">
						<div className="text-right">
							<img
								src="./assets/images/banner_color.png"
								className="brands-image"
								alt="bg"
								width={418}
							/>
						</div>
						<div className="product-block d-flex">
							{products.map((item) => (
								<div className="relative" key={item.id}>
									<img
										src="./assets/images/facebook.svg"
										alt="facebook"
										className="social"
									/>
									<img
										src={item.image}
										className="block-product"
										alt={item.name}
									/>
									<div className="prices">${item.price}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Explore2;
