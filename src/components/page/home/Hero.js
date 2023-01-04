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
					<div className="col-xs-12 col-sm-10 col-md-9 col-lg-9 col-xl-8 col-xxl-7">
						<h1>I <span>define</span>, <span>design</span> and <span>deliver</span> digital and product experiences for early-stage startups and established companies.<br/> </h1>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero;