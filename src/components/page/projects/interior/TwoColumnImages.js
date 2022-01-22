import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnImages({data}) {
	console.log('data', data)
	return (
		<div className="project-TwoColumnImages">
			<div className="container">
				<div className="row">
					<div className="col-6 col-lg-12">
						<GatsbyImage className="project-fullwidthimage-image" image={data.img1.childImageSharp.gatsbyImageData} />
					</div>
					<div className="col-6 col-lg-12">
						<GatsbyImage className="project-fullwidthimage-image" image={data.img2.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}