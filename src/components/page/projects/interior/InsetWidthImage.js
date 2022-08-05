import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function InsetWidthImage({data}) {
	return (
		<div className="project-insetwidthimage">
			<div className="container">
				<div className="row">
					<div className="push-2 col-xxl-8 col-xl-10 push-xl-1 push-md-1 col-md-10 col-sm-12 push-sm-hide">
						<GatsbyImage className="project-insetwidthimage-image" image={data.img.childImageSharp.gatsbyImageData} alt={data.img.name}/>
					</div>
				</div>
			</div>
		</div>
	)
}