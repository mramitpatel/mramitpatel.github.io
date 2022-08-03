import React,{useState,useEffect} from "react"
import { Link } from "gatsby";

const Header = ({headerType = 'home',idx,len, location = {}}) => {
	const [visible, setVisible] = useState(false);
	const slug = location.state && location.state.fromHome ? '/' : '/';
	const HomeHeader = ({buttonLink,buttonText}) => {
		return(
			<>
			<div className="col-6">
			 	<h4 className="">
				 <Link to="/" className="name link">
					Amit Patel
				</Link>
				</h4>
			</div>
			<div className="col-6 connect">
			{/* <Link to="https://www.instagram.com/mramitpatel/" className="link mobile-hide">IG</Link> */}
				<Link to="https://www.linkedin.com/in/mramitpatel/" className="link mobile-hide">LinkedIn</Link>
				<Link to="mailto:amit@mramitpatel.com" className="link mobile-hide">Mail</Link>
				<Link to={buttonLink} className="button">{buttonText}</Link>
			</div>
			</>
		)
	};
	const CaseStudyHeader = () => {
		return (
			<>
			<div className="header-flex col-2 col-md-4">
				<Link to='/' className="name">Amit Patel</Link>
			</div>
			<div className="mobile-hide header-flex col-2">
				<span className="count">{idx}&#8209;{len} </span>
			</div>
			{/* <div className="">
				<Link to="/projects" className="button">Work</Link>
			</div> */}
			<div className=" header-flex push-6 col-2">
			<Link to={slug}
				state={{ fromCaseStudy: false, }}>
					<div className="header-flex-close">
					<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line class="cls-1" x1=".5" y1=".5" x2="15.5" y2="15.5"/><line class="cls-1" x1="15.5" y1=".5" x2=".5" y2="15.5"/></svg>
					</div>
				</Link>
			</div>
			</>
			// <div className="col-12">
			// 	<h4 className="header-flex">
			// 	<Link to='/' className="name">Amit Patel</Link>
			// 	<span className="count">{idx}&#8209;{len} </span>
			// 	<Link to={slug}
			// 	state={{ fromCaseStudy: false, }}>
			// 		<div className="header-flex-close">
			// 			<svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			// 				<circle cx="19" cy="19" r="18.375"  stroke="black" strokeWidth="1.25"/>
			// 				<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(0.713618 0.700535 -0.713618 0.700535 10.5952 11.7275)" stroke="black" strokeWidth="1.25"/>
			// 				<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(-0.713618 0.700535 -0.713618 -0.700535 25.7114 11)" stroke="black" strokeWidth="1.25"/>
			// 			</svg>

			// 		</div>
			// 	</Link>
			// </h4>
			// </div>
		)
	}
	const headerClass = visible ? 'header-visible' : '';
	useEffect(()=> {
		setVisible(true);
	}, [])
	const RenderHeader = (type) => {
		switch(type) {
			case 'home':
				return <HomeHeader buttonLink="/info" buttonText="Info"/>
			case 'caseStudy':
				return <CaseStudyHeader />
			case 'info':
				return <HomeHeader buttonLink="/" buttonText="Work"/>
				break;
		}
	}
	return (
		<div className={`header ${headerClass}`}>
			<div className="container">
				<div className="row">
					{RenderHeader(headerType)}
				</div>
			</div>
		</div>
	)
}

export default Header
