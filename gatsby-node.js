const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const caseStudyTemplate = path.resolve('src/templates/caseStudy.js');
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
						img1Class
						img2 {
							childImageSharp {
								gatsbyImageData(formats: [WEBP,AUTO])
							}
						}
						img2Class
					}
					TextBlock {
						title
						text
					}
					BackgroundSwap {
						prevBg
						newBg
					}
				}
			}
		}
	}`)
	.then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}
		const CaseStudyNodes = res.data.allWorkJson.nodes;
		CaseStudyNodes.forEach((node,idx) => {
			node.idx = idx + 1;
			node.len = CaseStudyNodes.length;
			if (CaseStudyNodes[idx+1] != null) {
				node.next = {
					description: CaseStudyNodes[idx+1].byline, 
					slug: CaseStudyNodes[idx+1].slug,
					title:CaseStudyNodes[idx+1].title
				}
			} else {
				node.next = {
					description: CaseStudyNodes[0].byline, 
					slug: CaseStudyNodes[0].slug,
					title:CaseStudyNodes[0].title
				}
			}
			// console.log(Object.keys(node.layout))
			// console.log(node.layout[0])
			// node.layout.forEach(item => {
			// 	console.log({item})
			// 	// if (item === 'FullWidthImage' || item === ' TwoColumnImages') {
			// 	// 	item.alt = `${node.title} case study` 
			// 	}
			// });
			createPage({
				path: `/projects/${node.slug}`,
				component: caseStudyTemplate,
				context: node
			})
		});
	})
}