import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
export default function Essay() {
	return (
		<div className="essay">
			<div className="container">
				<div className="row">
					<div className="col-5 col-md-12">
						<h2>Essays</h2>
					</div>
					<div className="col-7 col-md-12">
						<ul className="essay-list">
							<li><a href="#">New Kanye album is mid. <StaticImage src={'../../../images/arrow.png'}/> </a></li>
							<li><a href="#">New Kanye album is mid. <StaticImage src={'../../../images/arrow.png'}/> </a></li>
							<li><a href="#">New Kanye album is mid. <StaticImage src={'../../../images/arrow.png'}/> </a></li>
							<li><a href="#">New Kanye album is mid. <StaticImage src={'../../../images/arrow.png'}/> </a></li>
							<li><a href="#">New Kanye album is mid. <StaticImage src={'../../../images/arrow.png'}/> </a></li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="essay-button">
							<Link to="/writing" className="button">All Essays</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}