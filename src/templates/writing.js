import React, {useEffect, useState, useRef} from 'react';
import "../assets/scss/main.scss"
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Seo from '../components/seo'
import Title from '../components/writing/Title'
import Hero from '../components/writing/Hero'
import { MDXProvider } from "@mdx-js/react"

const colClass = ''; 

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
	const {title,byline,hero} = frontmatter;


	return (
		<Layout pageClass="writing-article" type="writing">
			<Seo title={title} />
			<Title title={title} byline={byline}/>
			<Hero img={hero}/>
				<MDXProvider components={components}>
					<MDXRenderer>{body}</MDXRenderer>
				</MDXProvider>



		</Layout>
	)
}