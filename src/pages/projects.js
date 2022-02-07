import React from 'react';
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
					}
				}
      }
    `
  )
	return (
		<Layout pageClass="project" type="projects">
			<Seo title="Selected Projects" />
			<Hero/>
			<ProjectList projects={allWorkJson.nodes} />
		</Layout>
	)
}