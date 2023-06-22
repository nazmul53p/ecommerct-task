import React, { useState } from "react";

const VerticalSlider = () => {
	const [prevPosition, setPrevPosition] = useState(0);
	const [nextPosition, setNextPosition] = useState(2);
	const sliderItems = [
		{
			id: 1,
			image: "assets/images/lens.png",
			name: "Fuji 14mm lens",
		},
		{
			id: 2,
			image: "assets/images/stand.png",
			name: "Camera stand",
		},
		{
			id: 3,
			image: "assets/images/lens.png",
			name: "Apple",
		},
		{
			id: 4,
			image: "assets/images/lens.png",
			name: "Orange",
		},
	];

	const handleClick = () => {
		setPrevPosition(prevPosition + 2 !== sliderItems.length ? prevPosition + 2 : 0);
		setNextPosition(nextPosition !== sliderItems.length ? nextPosition + 2 : 2);
	};

	const slicedArray = sliderItems.slice(prevPosition, nextPosition);

	return (
		<>
			{slicedArray.map((item) => (
				<span key={item.id}>
					<img src={item.image} alt={item.name} />
					<p className="title-sm mb-4">{item.name}</p>
				</span>
			))}
			<p onClick={handleClick}>
				<i className="fa fa-chevron-circle-down down-arrow fa-2x"></i>
			</p>
		</>
	);
};

export default VerticalSlider;
