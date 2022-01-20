const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const caseStudyTemplate = path.resolve('src/templates/caseStudy.js');

							// TextBlock {
						// 	text
						// 	title
						// }
		return graphql(`{
			allWorkJson {
				nodes {
					background
					slug
					title
					byline
					hero {
						childImageSharp {
							gatsbyImageData(formats: [WEBP,AUTO])
            }
      		}
					description
					agency
					roles
					layout {
						FullWidthImage {
							img {
								childImageSharp {
									gatsbyImageData(formats: [WEBP,AUTO])
								}
							}
						}
						TwoColumnImages {
							img1 {
								childImageSharp {
									gatsbyImageData(formats: [WEBP,AUTO])
								}
							}
							img2 {
								childImageSharp {
									gatsbyImageData(formats: [WEBP,AUTO])
								}
							}
						}
					}
					next {
						description
						slug
						title
					}
				}
			}
		}`)
			.then(res => {
				if (res.errors) {
					return Promise.reject(res.errors);
				}

				res.data.allWorkJson.nodes.forEach(node => {
						createPage({
							path: `/projects/${node.slug}`,
							component: caseStudyTemplate,
							context: node
						})
				});
			})
}