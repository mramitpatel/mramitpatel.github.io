import * as React from 'react';
import { useEffect, useState, useRef } from "react"
import { useCallback } from 'react'

const ScrollToShow = ({ component}) => {
	const [visible, setVisible] = useState(false);
	const hiddenRef = useRef();
	
	const scrollHandler = useCallback(() => {
		if (!visible && window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 70) {
			setVisible(true)
			window.removeEventListener('scroll', scrollHandler);
		}
	},[visible]);
	
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, [hiddenRef, scrollHandler]);

	const showClass = visible ? 'scroll-to-show-reveal' : '';
	return (
		<div ref={hiddenRef} className={`scroll-to-show ${showClass}`}>
			{component}
		</div>
	)
}

export default ScrollToShow