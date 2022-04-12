import React from 'react';
import { Link } from 'gatsby';
export default function Navigation({isHome}) {
	const showName = !isHome ? 'true' : false;
	return (
		<div className="container">
			<div className="row">
				<div className='col-12'>
					
					<nav className="navigation">
					{showName && 	<Link to="/"><h4>Amit Patel</h4></Link>}
						<Link to="/projects" className="button">Projects</Link>
						<Link to="/" className="button">Writing</Link>
						<Link to="/info" className="button">Info</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}