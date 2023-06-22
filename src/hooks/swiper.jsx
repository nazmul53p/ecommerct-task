import { useState } from "react";

export default function Swiper(limit, products) {
	const [prevPosition, setPrevPosition] = useState(0);
	const [nextPosition, setNextPosition] = useState(limit);
	const handlePrev = () => {
		setPrevPosition(prevPosition + limit > limit ? prevPosition - limit : 0);
		setNextPosition(nextPosition > limit ? nextPosition - limit : limit);
	};
	const handleNext = () => {
		setPrevPosition((val) => (val + limit > products.length ? val : val + limit));
		setNextPosition((prev) => (prev > products.length ? prev : prev + limit));
	};

	return {
		prevPosition,
		nextPosition,
		handlePrev,
		handleNext,
	};
}
