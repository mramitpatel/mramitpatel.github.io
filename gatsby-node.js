const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const caseStudyTemplate = path.resolve('src/templates/caseStudy.js');
	const writingTemplate = path.resolve('src/templates/writing.js');
	const allWorkQuery = `allWorkJson {
		nodes {
			background
			slug
			title
			byline
			intro
			hero {
				childImageSharp {
					gatsbyImageData(
						formats: WEBP
						transformOptions: {fit: FILL}
						outputPixelDensities: 3		
					)
				}
			}
			description
			challenge
			roleDescription
			duration
			platform
			contribution
			agency
			roles
			layout {
				FullWidthImage {
					img {
						name
						childImageSharp {
							gatsbyImageData(
								formats: WEBP
								transformOptions: {fit: FILL}
								outputPixelDensities: 3	
							)
						}
					}
				}
				InsetWidthImage {
					img {
						name
						childImageSharp {
							gatsbyImageData(
								formats: WEBP
								transformOptions: {fit: FILL}
								outputPixelDensities: 3	
							)
						}
					}
				}
				InsetFigmaEmbed {
					FigmaEmbedURL
				}
				TwoColumnFigmaEmbed {
					img {
						name
						childImageSharp {
							gatsbyImageData(
								formats: WEBP
								transformOptions: {fit: FILL}
								outputPixelDensities: 3
								
							)
						}
					}
					imgClass
					FigmaEmbedURL
					embedClass
				}
				TwoColumnImages {
					img1 {
						name
						childImageSharp {
							gatsbyImageData(
								formats: WEBP
								transformOptions: {fit: FILL}
								outputPixelDensities: 3
								
							)
						}
					}
					img1Class
					img2 {
						name
						childImageSharp {
							gatsbyImageData(
								formats: WEBP
								transformOptions: {fit: FILL}
								outputPixelDensities: 3		
							)
						}
					}
					img2Class
				}
				TextBlock {
					title
					text
				}
				SectionTextBlock {
					heading
					title
					text
				}
				BackgroundSwap {
					prevBg
					newBg
				}
				FullWidthVideo{
					videoSrcURL
				}
			}
		}
	}`;

	const allMdx = `allMdx {
    nodes {
      frontmatter {
        title
        slug
        byline
				background
        textColor
        hero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }`

	
	return graphql(`{
		${allWorkQuery},
		${allMdx}
		
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

			createPage({
				path: `/projects/${node.slug}`,
				component: caseStudyTemplate,
				context: node
			})
		});
		const writingNodes = res.data.allMdx;
		writingNodes.nodes.forEach((node,idx) => {
			createPage({
				path: `/writing/${node.frontmatter.slug}`,
				component: writingTemplate,
				context: node
			})
		})
	})
}

