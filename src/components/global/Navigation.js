import React from 'react';
import { Link } from 'gatsby';
export default function Navigation({isHome}) {
	const classList = isHome ? 'col-12' : 'col-8 push-2 push-lg-hide col-lg-12'; 
	return (
		<div className="container">
			<div className="row">
				<div className={classList}>
					<nav className="navigation">
						<Link to="/projects" className="button">Projects</Link>
						<Link to="/" className="button">Writing</Link>
						<Link to="/info" className="button">Info</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}