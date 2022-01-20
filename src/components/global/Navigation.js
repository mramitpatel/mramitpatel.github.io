import React from 'react';
import { Link } from 'gatsby';
export default function Navigation() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-8 push-2 push-lg-hide col-lg-12">
					<nav className="navigation">
						<Link className="button">Projects</Link>
						<Link className="button">Writing</Link>
						<Link className="button">Info</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}