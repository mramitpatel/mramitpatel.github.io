import React,{useState,useEffect} from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Header = ({isCaseStudy = false,idx,len, location = {}}) => {
	const [visible, setVisible] = useState(false);
	const slug = location.state && location.state.fromHome ? '/' : '/projects';
	const HomeHeader = () => <h4><span>Amit Patel –</span> UX/Design</h4>;
	const CaseStudyHeader = () => {
		return (
			<h4 className="header-flex">
				<Link to='/' class="name">Amit Patel</Link>
				<span class="count">{idx}&#8209;{len} </span>
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
			</h4>
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
					<div className='col-12'>
						{!isCaseStudy ? <HomeHeader /> : <CaseStudyHeader /> }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
