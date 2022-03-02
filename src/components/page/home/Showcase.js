import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Carousel = (data) => {
	const [current,setCurrent] = useState(0);
	const len = data.data.nodes.length;

	// useEffect(()=> {
	// 	setInterval(() => {
	// 		if(current != len) {
	// 			setCurrent(current + 1)
	// 		} else {
	// 			setCurrent(0)
	// 		}
	// 	}, 2000);
	// })

	return (
		<div className="carousel">
			{data.data.nodes.map((work,idx) => {
					return <CarouselItem active={idx == current && true} idx={idx}key={idx} data={work}/>
				})
			}
		</div>
	)
}

const CarouselItem = (data,active) => {
	const {hero, title,type,slug} = data.data;
	const showClass = data.active ? "home-showcase-carouselItem show" : 'home-showcase-carouselItem';
	return (
		<Link to={slug} className={showClass}>
			<div className="row">
				<div className="col-12">
					{/* <img src="https://via.placeholder.com/1327x885" alt="" /> */}
					<GatsbyImage alt={title} image={hero.childImageSharp.gatsbyImageData} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h4 className="home-showcase-title">{title}</h4>
					<h4 className="home-showcase-type">{type}</h4>
				</div>
			</div>
			</Link>
	)
}



export default function Showcase() {
	const { allWorkJson } = useStaticQuery(
		graphql`
			query {
				allWorkJson {
					nodes {
						hero {
							childImageSharp {
								gatsbyImageData
							}
						}
						title
						type
						slug
					}
				}
			}
		`
	);
	return (
		<div className="home-showcase">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2>Select Projects</h2>
					</div>
				</div>
				<Carousel data={allWorkJson} />
				<div className="row">
					<div className="col-12">
						<div className="home-showcase-button">
							<Link className="button button--invert" to='/projects'>All Projects</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}