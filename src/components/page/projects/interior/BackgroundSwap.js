import React, {useState,useRef,useEffect, useCallback} from 'react';

export default function BackgroundSwap({data}) {
	const {prevBg,newBg} = data;
	const hiddenRef = useRef();
	const isBrowser = typeof window !== "undefined"
	
	function toggleBackgroundCLass(newClass) {
		document.getElementsByTagName('body')[0].classList = []
		document.getElementsByTagName('body')[0].classList.add(newClass);
	}

	const scrollHandler = useCallback(() => {
		if (isBrowser && window.pageYOffset <= hiddenRef.current.offsetTop - 500) {
			toggleBackgroundCLass(newBg);
		} else {
			toggleBackgroundCLass(prevBg);
		}
	},[]);


	useEffect(() => {
		if (isBrowser) {
			window.addEventListener('scroll', scrollHandler);
			return () => {
				window.removeEventListener('scroll', scrollHandler);
			}
		}

	}, [hiddenRef, scrollHandler]);
	

	return (
		<div ref={hiddenRef} className="project-backgroundswap" />
	)
}