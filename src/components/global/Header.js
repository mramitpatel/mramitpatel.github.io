import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Header = ({isCaseStudy = false,idx,len}) => {
	const classList = !isCaseStudy ? 'col-12' : 'col-10 push-2 col-lg-12 push-lg-hide'

	const HomeHeader = () => <h4><span>Amit Patel –</span> UX/Design</h4>;
	const CaseStudyHeader = () => {
		return (
			<h4 className="header-flex">
				{idx}/{len} 
				<Link to="/projects"
				state={{ fromCaseStudy: false }}>
					<div className="header-flex-close"></div>
				</Link>
			</h4>
		)
	}
	return (
		<div className="header">
			<div className="container">
				<div className="row">
					<div className={classList}>
						{!isCaseStudy ? <HomeHeader /> : <CaseStudyHeader /> }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
