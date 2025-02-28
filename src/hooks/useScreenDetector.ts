import { useEffect, useState } from "react";

export const useScreenDetector = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);

		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 768;
	const isTablet = width > 768 && width <= 1200;
	const isDesktop = width > 1200;

	return {
		isMobile,
		isTablet,
		isDesktop,
		width,
	};
};
