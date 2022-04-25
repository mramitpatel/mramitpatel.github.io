import React,{useState,useEffect} from "react"
import { Link } from "gatsby";

const Header = ({isCaseStudy = false,idx,len, location = {}}) => {
	const [visible, setVisible] = useState(false);
	const slug = location.state && location.state.fromHome ? '/' : '/projects';
	const HomeHeader = () => {
		return(
			<div className="col-12">
			 <h4>Amit Patel—Brand &amp; Product Design</h4>
			</div>
		)
	};
	const CaseStudyHeader = () => {
		return (
			<>
			<div className="header-flex col-2 col-md-4">
				<Link to='/' class="name">Amit Patel</Link>
			</div>
			<div className="header-flex col-1">
				<span class="count">{idx}&#8209;{len} </span>
			</div>
			<div className=" header-flex col-2 push-7 push-md-5">
			<Link to={slug}
				state={{ fromCaseStudy: false, }}>
					<div className="header-flex-close">
						<svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="19" cy="19" r="18.375"  stroke="black" stroke-width="1.25"/>
							<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(0.713618 0.700535 -0.713618 0.700535 10.5952 11.7275)" stroke="black" stroke-width="1.25"/>
							<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(-0.713618 0.700535 -0.713618 -0.700535 25.7114 11)" stroke="black" stroke-width="1.25"/>
						</svg>

					</div>
				</Link>
			</div>
			</>
			// <div className="col-12">
			// 	<h4 className="header-flex">
			// 	<Link to='/' class="name">Amit Patel</Link>
			// 	<span class="count">{idx}&#8209;{len} </span>
			// 	<Link to={slug}
			// 	state={{ fromCaseStudy: false, }}>
			// 		<div className="header-flex-close">
			// 			<svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			// 				<circle cx="19" cy="19" r="18.375"  stroke="black" stroke-width="1.25"/>
			// 				<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(0.713618 0.700535 -0.713618 0.700535 10.5952 11.7275)" stroke="black" stroke-width="1.25"/>
			// 				<line y1="-0.625" x2="21.8015" y2="-0.625" transform="matrix(-0.713618 0.700535 -0.713618 -0.700535 25.7114 11)" stroke="black" stroke-width="1.25"/>
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

	return (
		<div className={`header ${headerClass}`}>
			<div className="container">
				<div className="row">
						{!isCaseStudy ? <HomeHeader /> : <CaseStudyHeader /> }
				</div>
			</div>
		</div>
	)
}

export default Header
