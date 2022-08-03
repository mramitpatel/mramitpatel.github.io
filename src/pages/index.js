import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/page/home/Hero';
import ProjectList from '../components/page/home/ProjectList';

import Showcase from '../components/page/home/Showcase';
import Navigation from '../components/global/Navigation';
import Essay from '../components/page/home/Essay';

export default function Index() {
	const { allWorkJson } = useStaticQuery(
		graphql`
		  query {
					allWorkJson {
						nodes {
							title
							slug
							type
							byline
							hero {
								childImageSharp {
									gatsbyImageData(formats: [WEBP, AUTO])
								}
							}
							thumbnailClass
							thumbnail {
								childImageSharp {
									gatsbyImageData(formats: [WEBP, AUTO])
								}
							}
						}
					}
		  }
		`
	  )
	

	useEffect(() => {
		document.getElementsByTagName('body')[0].classList = [];
	},[])
	return (
		<Layout pageclassName="home" type="home">
			<Seo title="Portfolio and Info" />
			<Hero />
			{/* <Navigation isHome={true}/> */}
			<ProjectList projects={allWorkJson.nodes} sectionContainer="homeProjectContainer"/>
			{/* <Showcase />  */}
			{/* <Essay/> */}
		</Layout>
	)
}