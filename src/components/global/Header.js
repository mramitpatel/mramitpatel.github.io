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
					<div className="button header-flex-close">
					<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.39 12.39"><g id="Layer_1-2"><path class="cls-1" d="M6.9,6.19L12.24,.85c.2-.2,.2-.51,0-.71s-.51-.2-.71,0L6.19,5.49,.85,.15C.66-.05,.34-.05,.15,.15S-.05,.66,.15,.85L5.49,6.19,.15,11.54c-.2,.2-.2,.51,0,.71,.1,.1,.23,.15,.35,.15s.26-.05,.35-.15L6.19,6.9l5.34,5.34c.1,.1,.23,.15,.35,.15s.26-.05,.35-.15c.2-.2,.2-.51,0-.71L6.9,6.19Z"/></g></svg>
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
