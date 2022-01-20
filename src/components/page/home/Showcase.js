import React from 'react';
import { Link } from 'gatsby';


export default function Showcase() {
	return (
		<div className="home-showcase">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2>Select Projects</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<img src="https://via.placeholder.com/1327x885" alt="" />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h4 className="home-showcase-title">Mack Truck Builder</h4>
						<h4 className="home-showcase-type">Product Design</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="home-showcase-button">
							<Link className="button button--invert" to='/projects'>All Projects</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}