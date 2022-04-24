import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
export default function Writing() {
	const { allMdx } = useStaticQuery(
		graphql`
				query {
					allMdx {
						nodes {
							frontmatter {
								title
								slug
							}
						}
					}
				}
			`
		);
	return (
		<Layout pageClass="writing" type="info">
			<Seo title="Writing" />
			<div className="container">
				<div className="row">
					<div className="push-2 col-10 push-lg-hide col-lg-12">
						<h1 class="writing-title">Select Writing</h1>
						<p className="writing-description">Sometimes I write</p>

						<div className="writing-list">
						{allMdx.nodes.map((writing) => {
								return (
								<Link className="writing-list-item" to={`writing/${writing.frontmatter.slug}`}> 
									{writing.frontmatter.title} <StaticImage src={'../../../images/arrow.png'}/>
								</Link>)
						})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

