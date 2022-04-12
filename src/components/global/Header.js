import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Header = ({isCaseStudy = false,idx,len, location = {}}) => {
	const slug = location.state && location.state.fromHome ? '/' : '/projects';
	const HomeHeader = () => <h4><span>Amit Patel –</span> UX/Design</h4>;
	const CaseStudyHeader = () => {
		return (
			<h4 className="header-flex">
				<Link to='/' class="name">Amit Patel</Link>
				<span class="count">{idx}/{len} </span>
				<Link to={slug}
				state={{ fromCaseStudy: false, }}>
					<div className="header-flex-close">
						<StaticImage className="header-flex-close-icon" loading="eager" height={38} src="../../images/X.svg" alt="close" />
					</div>
				</Link>
			</h4>
		)
	}
	return (
		<div className="header">
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
