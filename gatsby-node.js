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
				}
			}
		}`)
			.then(res => {
				if (res.errors) {
					return Promise.reject(res.errors);
				}

				res.data.allWorkJson.nodes.forEach((node,idx) => {
						node.idx = idx + 1;
						node.len = res.data.allWorkJson.nodes.length;
						if (node[idx+1] != null) {
							node.next = {
								description: res.data.allWorkJson.nodes[idx+1].byline, 
								slug: res.data.allWorkJson.nodes[idx+1].slug,
								title:res.data.allWorkJson.nodes[idx+1].title
							}
						} else {
							node.next = {
								description: res.data.allWorkJson.nodes[0].byline, 
								slug: res.data.allWorkJson.nodes[0].slug,
								title:res.data.allWorkJson.nodes[0].title
							}
						}
						createPage({
							path: `/projects/${node.slug}`,
							component: caseStudyTemplate,
							context: node
						})
				});
			})
}