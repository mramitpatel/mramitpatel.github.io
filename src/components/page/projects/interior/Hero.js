import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({img}) {
	return (
		<div className="project-hero">
			<div className="container">
				<div className="row">
					<div className="col-12">
					<GatsbyImage className="project-hero-image-container-bg" alt={img.name} image={img.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}