import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({img}) {
	return (
		<div className="writing-article-hero">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<GatsbyImage className="writing-article-hero-image-container-bg" alt={img.title} image={img.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}