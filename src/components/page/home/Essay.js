import React from 'react'
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"


export default function Essay() {
	const { allMdx } = useStaticQuery(
	graphql`
			query {
				allMdx{
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
		<div className="essay">
			<div className="container">
				<div className="row">
					<div className="col-5 col-md-12">
						<h2>Writing</h2>
						<p>Articles, ideas and random thoughts.</p>
					</div>
					<div className="col-7 col-md-12">
						<ul className="essay-list">
							{allMdx.nodes.map((writing) => {
								return <li key={writing.frontmatter.title}><Link to={`writing/${writing.frontmatter.slug}`}> {writing.frontmatter.title} <span className="arrow-r">→</span></Link></li>
							})}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="essay-button">
							<Link to="/writing" className="button">All Essays</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}