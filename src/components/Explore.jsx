import React from "react";

const Explore = () => {
	const brands = [
		{
			id: 1,
			name: "Apple",
			image: "./assets/images/apple.svg",
		},
		{ id: 2, name: "BMW", image: "./assets/images/bmw.svg" },
		{ id: 3, name: "Nike", image: "./assets/images/nike.svg" },
		{ id: 4, name: "Fila", image: "./assets/images/fila.svg" },
		{
			id: 5,
			name: "MI",
			image: "./assets/images/mi.svg",
		},
		{
			id: 6,
			name: "Adidas",
			image: "./assets/images/adidas.svg",
		},
	];
	return (
		<section className="explore">
			<div className="container">
				<div className="row explore-body">
					<div className="col-md-6 brands">
						<div className="brands">
							{brands.map((item) => (
								<img
									key={item.id}
									src={item.image}
									className="brand-image"
									alt={item.name}
									width="100%"
								/>
							))}
						</div>
					</div>
					<div className="col-md-6 explore-right">
						<h3 className="title-primary">Explore Most Popular Brands</h3>
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
				</div>
			</div>
		</section>
	);
};

export default Explore;
