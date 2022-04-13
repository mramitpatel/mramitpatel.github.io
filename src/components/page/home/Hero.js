import React,{useState, useEffect} from 'react';

const Hero = () => {
	let headerClass = 'home-hero ';
	const [isVisible, setIsVisible] = useState(false)
	useEffect(()=> {
		setIsVisible(true);
	}, [])

	const showClass = isVisible ? 'home-hero-visible' : '';
	return (
		<div className={`home-hero ${showClass}`}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-12">
						<h1><span>I'm Amit.</span> I designs products, <br /> shapes brands and create <br /> experiences that matter.</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero;