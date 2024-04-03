import { useState, useEffect } from 'react';

export const useScrollTop = (threshold = 10): boolean => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = (): void => {
			if (window.scrollY > threshold) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [threshold]);

	return scrolled;
};
