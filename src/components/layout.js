
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./global/Header"
import Footer from "./global/Footer"
import "../assets/scss/main.scss"
import Navigation from "./global/Navigation"
 
 const Layout = ({
	 children,
	 pageClass,
	 type,
	 idx,
	 len
	}) => {
	 const data = useStaticQuery(graphql`
		 query SiteTitleQuery {
			 site {
				 siteMetadata {
					 title
				 }
			 }
		 }
	 `)
	 
	 const ChildrenContainer = ({children}) => {
		return (
			<>
				<main>{children}</main>
			 </>
		)
	}

	 	const Home = ({children}) => {
		return (
			<>
			 	<Header />
				<ChildrenContainer children={children} />
			 	<Footer isHome={true}/>
			</>
		)
	 	}

		const Info = ({children}) => {
			return (
				<>
					<Navigation />
					<ChildrenContainer children={children} />
					<Footer isHome={false}/>
				</>
			)
		}
		const Casestudy = ({children}) => {
			return (
				<>
					<Header isCaseStudy={true} idx={idx} len={len} />
					<ChildrenContainer children={children} />
					<Footer isHome={false}/>
				</>
			)
		}
		const Projects = ({children}) => {
			return (
				<>
					<Navigation />
					<ChildrenContainer children={children} />
					<Footer isHome={false}/>
				</>
			)
		}

		const getCorrectLayout = (type) => {
			switch(type) {
				case 'home':
					return <Home children={children}/>
				case 'info':
					return <Info children={children}/>
				case 'case':
					return <Casestudy children={children}/>
				case 'projects':
					return <Projects children={children}/>
			}
		}
	 return (
			<div className={`page ${pageClass}`}>
				{getCorrectLayout(type)}
		 	</div>
	 )

 }
 
 export default Layout
 