import React, { useState } from "react";

const HorizontalSlider = () => {
	const [currentItem, setCurrentItem] = useState(1);
	const sliderItems = [
		{
			id: 1,
			image: "assets/images/camera.png",
			price: 110,
		},
		{
			id: 2,
			image: "assets/images/scanner.png",
			price: 120,
		},
	];

	const handlePrev = () => {
		setCurrentItem((prev) => (prev > 1 ? prev - 1 : 1));
	};
	const handleNext = () => {
		setCurrentItem((val) => (val !== sliderItems.length ? val + 1 : val));
	};

	const slicedArray = sliderItems.slice(currentItem - 1, currentItem);

	return (
		<>
			{slicedArray.map((item) => (
				<img key={item.id} className="slider1img" src={item.image} alt={item.name} />
			))}

			<h6 className="text-center mt-5 text-primary">
				<span className="prev cursor-pointer" onClick={handlePrev}>
					PREV
				</span>
				<span className="arrow px-5">
					{sliderItems.map((item, index) => (
						<span key={item.id}>
							{index + 1 === currentItem ? (
								<i className="fas fa-circle mx-2"></i>
							) : (
								<i className="far fa-circle mx-2"></i>
							)}
						</span>
					))}
				</span>
				<span className="next cursor-pointer" onClick={handleNext}>
					NEXT
				</span>
			</h6>
		</>
	);
};

export default HorizontalSlider;
