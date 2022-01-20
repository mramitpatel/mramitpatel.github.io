import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function FullWidthImage({data}) {

	return (
		<div className="project-fullwidthimage">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<GatsbyImage className="project-fullwidthimage-image" image={data.img.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}