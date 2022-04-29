import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({img,alt}) {
	return (
		<div className="project-hero">
			<div className="container">
				<div className="row">
					<div className="col-12">
					<GatsbyImage className="project-hero-image-container-bg" alt={alt} image={img.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}