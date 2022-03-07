import React, { useEffect } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

export default function ProjectListItem({position, slug, img, hero, title, type,thumbnailClass}) {
	const projectClassList = thumbnailClass != null ? thumbnailClass : 'col-12';
	const imgSize = position % 3 === 0 ? 760 : 636;
	const isBrowser = typeof window !== "undefined"
	let isMobile;

	useEffect(()=> {
		if (isBrowser) {
			const windowSize = window.innerWidth;
			window.addEventListener("resize", ()=> {
				isMobile = windowSize < 1024 ? true : false;
				console.log('resize');
			});
		}	console.log(isMobile);
	}, [])
	return (
		<div className={`project-list-item ${projectClassList}`}>
			<Link to={`/projects/${slug}`} >
				<GatsbyImage height={imgSize} className="project-list-item-thumbnail" alt={title} image={img.childImageSharp.gatsbyImageData} />
				<GatsbyImage height={imgSize} className="project-list-item-hero" alt={title} image={hero.childImageSharp.gatsbyImageData} />
				<p className="project-list-item-title">{title}</p>
				<p className="project-list-item-type">{type}</p>
			</Link>
		</div>
	)
}