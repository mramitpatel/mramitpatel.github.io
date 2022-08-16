import React,{useState,useEffect} from "react"
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({headerType = 'home',idx,len, location = {}, anchor}) => {
	const [visible, setVisible] = useState(false);
	const slug = anchor ? `/${anchor}` : '/';
	const HomeHeader = ({buttonLink,buttonText}) => {
		return(
			<>
			<div className="header-flex col-6">
				<Link to='/' className="name">Amit Patel</Link>
			</div>
			<div className="header-flex header-flex-end col-6">
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
			<div className="header-flex col-2 col-xl-2 col-sm-4">
				<Link to='/' className="name">Amit Patel</Link>
			</div>
			<div className="mobile-hide header-flex col-2">
				<span className="count">{idx}&#8209;{len} </span>
			</div>
			{/* <div className="">
				<Link to="/projects" className="button">Work</Link>
			</div> */}
			<div className="col-2 push-6 header-flex header-flex-end">
			<AnchorLink className="button header-flex-close" to={slug}
				state={{ fromCaseStudy: false, }}>
					<span>ESC</span><div className="button-close">
						<svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><line className="cls-1" x1=".5" y1=".5" x2="15.5" y2="15.5"/><line className="cls-1" x1="15.5" y1=".5" x2=".5" y2="15.5"/></svg>
					</div>
				</AnchorLink>
			</div>
			</>
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
