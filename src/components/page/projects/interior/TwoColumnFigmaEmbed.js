import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

export default function TwoColumnFigmaEmbed({data}) {
	const imgClass = data.imgClass ? `${data.imgClass} col-lg-12` : "col-6 col-lg-12";
	const embedClass = data.embedClass ? `${data.embedClass} col-lg-12` : "col-6 col-lg-12";

	return (
<div className="project-figmaImgEmbed">
			<div className="container">
				<div className="row">
					<div className={imgClass}>
					{data.img != null && 
						<GatsbyImage className="project-fullwidthimage-image" image={data.img.childImageSharp.gatsbyImageData} alt={data.img.name}/>
					}
					</div>
					<div className={embedClass}>
						{data.FigmaEmbedURL != null && 
							<div className="responsive-iframe-container">
								<iframe className='responsive-Figma-iframe' src={data.FigmaEmbedURL}/>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}