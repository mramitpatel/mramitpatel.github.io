import React, {useEffect} from 'react';
import "../assets/scss/main.scss"
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Seo from '../components/seo'
import Title from '../components/writing/Title'
import Hero from '../components/writing/Hero'
import { MDXProvider } from "@mdx-js/react"
const isBrowser = typeof window !== "undefined"


const img = props => {
	// const data = props.map(({ style, ...rest }) => rest)
	console.log(props);
	return (
	 <img {...props}/>
	)
}
const components = {
	img: img

}

export default function CaseStudy({pageContext}){
	const {frontmatter,body} = pageContext
	const {title,byline,hero, background, textColor} = frontmatter;

	useEffect(() => {
		if(isBrowser) {
			document.querySelector('body').style.background = background != null ? background : '#ffffff'
			document.querySelector('body').style.color = textColor != null ? textColor : '#000000'
		}
	},[pageContext])

	return (
		<Layout pageclassName="writing-article" type="writing">
			<Seo title={title} />
			<Title title={title} byline={byline}/>
			<Hero img={hero} alt={title}/>
				<MDXProvider components={components}>
					<MDXRenderer>{body}</MDXRenderer>
				</MDXProvider>



		</Layout>
	)
}