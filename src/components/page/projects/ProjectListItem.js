import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

export default function ProjectListItem({position, slug, img, title, type}) {
	console.log(position, slug, img, title, type)
	const projectClassList = position % 4 == 0 ? "project-list-item--full" : '';
	return (
		<div className={`project-list-item ${projectClassList}`}>
			<Link to={`/projects/${slug}`}>
				<GatsbyImage className="case-study-hero-image-container-bg" image={img.childImageSharp.gatsbyImageData} />
				<p className="project-list-item-title">{title}</p>
				<p className="project-list-item-type">{type}</p>
			</Link>
		</div>
	)
}