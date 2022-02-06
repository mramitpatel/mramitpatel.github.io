import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnImages({data}) {
	const img1Class = `${data.img1Class} col-lg-12` || "col-6 col-lg-12"
	const img2Class = `${data.img2Class} col-lg-12` || "col-6 col-lg-12"
	return (
		<div className="project-TwoColumnImages">
			<div className="container">
				<div className="row">
					<div className={img1Class}>
						<GatsbyImage className="project-fullwidthimage-image" image={data.img1.childImageSharp.gatsbyImageData} />
					</div>
					<div className={img2Class}>
						<GatsbyImage className="project-fullwidthimage-image" image={data.img2.childImageSharp.gatsbyImageData} />
					</div>
				</div>
			</div>
		</div>
	)
}