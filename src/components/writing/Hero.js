import React,{useEffect, useRef} from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Hero({img}) {
	console.log('img', img)
	return (
		<div className="writing-article-hero">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<GatsbyImage className="writing-article-hero-image-container-bg" alt={img.name} image={img.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}