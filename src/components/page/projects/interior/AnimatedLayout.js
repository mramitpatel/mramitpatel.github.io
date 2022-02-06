import React from 'react';


export default function AnimatedLayout({isAnimating,children}) {
	const animatedClass = isAnimating ? 'animated' : '';
	return (
		<div class={`animated-layout ${animatedClass}`}>
			{children}
		</div>
	)
}