import React, {useRef,useEffect, useCallback} from 'react';

export default function BackgroundSwap({data}) {
	const {newBg} = data;
	const hiddenRef = useRef();
	const isBrowser = typeof window !== "undefined"
	
	const scrollHandler = useCallback(() => {
		if (isBrowser && window.pageYOffset >= hiddenRef.current.offsetTop - 125) {
			document.getElementsByTagName('body')[0].classList.add(newBg);
		} else {
			document.getElementsByTagName('body')[0].classList.remove('black');

		}
	},[isBrowser,newBg]);


	useEffect(() => {
		if (isBrowser) {
			window.addEventListener('scroll', scrollHandler);
			return () => {
				window.removeEventListener('scroll', scrollHandler);
			}
		}

	}, [hiddenRef, scrollHandler,isBrowser]);
	

	return (
		<div ref={hiddenRef} className="project-backgroundswap" />
	)
}