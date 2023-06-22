import React, { useState } from "react";

const Testimonial = () => {
	const [currentItem, setCurrentItem] = useState(1);
	const testimonials = [
		{
			id: 1,
			name: "Justin Pierre",
			designation: "Products Seller",
			content:
				"In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.",
		},
		{
			id: 2,
			name: "Robert Foster",
			designation: "Entrepreneur",
			content:
				"In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.",
		},
		{
			id: 3,
			name: "Mochael Haich",
			designation: "Products Seller",
			content:
				"In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.",
			image: "./assets/images/testimonial-banner.png",
		},
	];
	const handlePrev = () => {
		setCurrentItem((prev) => (prev > 1 ? prev - 1 : 1));
	};
	const handleNext = () => {
		setCurrentItem((val) => (val !== testimonials.length ? val + 1 : val));
	};

	const slicedArray = testimonials.slice(currentItem - 1, currentItem);

	return (
		<section className="testimonial">
			<div className="container-fluid">
				<div className="row explore-body">
					<div className="col-md-6 text-center testimonial-left pb-3">
						<img
							src="./assets/images/testimonial-banner.png"
							className="brands-image"
							alt="bg"
							width={418}
						/>
					</div>
					<div className="col-md-6 testimonial-right">
						{slicedArray.map((item) => (
							<span key={item.id}>
								<h3 className="title">{item.name}</h3>
								<h6 className="designation">{item.designation}</h6>
								<p className="text-decoration-italic">“{item.content}”</p>
							</span>
						))}
						<div className="navigation">
							<span onClick={handlePrev}>
								<i
									className={
										currentItem === 1
											? "fa fa-angle-left nav-left active"
											: "fa fa-angle-left nav-left"
									}
									aria-hidden="true"
								></i>
							</span>
							<span onClick={handleNext}>
								<i
									className={
										currentItem === testimonials.length
											? "fa fa-angle-right nav-right active"
											: "fa fa-angle-right nav-right"
									}
									aria-hidden="true"
								></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
