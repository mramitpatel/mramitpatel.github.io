import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnImages({data}) {
	const img1Class = data.img1Class ? `${data.img1Class} col-lg-12` : "col-6 col-lg-12";
	const img2Class = data.img2Class ? `${data.img2Class} col-lg-12` : "col-6 col-lg-12";

	return (
		<div className="project-TwoColumnImages">
			<div className="container">
				<div className="row">
					<div className={img1Class}>
					{data.img1 != null && 
						<GatsbyImage className="project-fullwidthimage-image" image={data.img1.childImageSharp.gatsbyImageData} alt={data.img1.name}/>
					}
					</div>
					<div className={img2Class}>
					{data.img2 != null && 
						<GatsbyImage className="project-fullwidthimage-image" image={data.img2.childImageSharp.gatsbyImageData} alt={data.img2.name}/>
					}
					</div>
				</div>
			</div>
		</div>
	)
}