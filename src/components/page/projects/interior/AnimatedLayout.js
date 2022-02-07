import React from 'react';


export default function AnimatedLayout({isAnimating,children}) {
	const animatedClass = isAnimating ? 'animated' : '';
	return (
		<div className={`animated-layout ${animatedClass}`}>
			{children}
		</div>
	)
}