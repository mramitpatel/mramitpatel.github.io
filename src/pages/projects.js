import React, {useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/page/projects/Hero';
import ProjectList from '../components/page/projects/ProjectList';
import Seo from '../components/seo'

export default function Projects() {
	const { allWorkJson } = useStaticQuery(
    graphql`
      query {
				allWorkJson {
					nodes {
						title
						slug
						type
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
		document.getElementsByTagName('body')[0].classList = []
	}, [])

	return (
		<Layout pageclassName="project" type="projects">
			<Seo title="Select Work | Amit Patel is a Creative Director and Product Designer" />
			<Hero/>
			<ProjectList projects={allWorkJson.nodes} />
		</Layout>
	)
}