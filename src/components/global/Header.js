import * as React from "react"

const Header = ({isCaseStudy = false,idx,len}) => {
	const classList = !isCaseStudy ? 'col-12' : 'col-10 push-2'
	return (
		<div className="header">
			<div className="container">
				<div className="row">
					<div className={classList}>
						{!isCaseStudy ?
							<h4><span>Amit Patel –</span> UX/Design</h4>
							: <h4>{idx}/{len}</h4>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
