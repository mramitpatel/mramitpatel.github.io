import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
					return <CarouselItem key={idx} data={work}/>
				})
			}
		</div>
	)
}

const CarouselItem = (data) => {
	const {hero, title,type,slug} = data.data;
	return (
		<Link  to={`projects/${slug}`} className='home-showcase-carouselItem'>
			<div className="row">
				<div className="col-12 home-showcase-carouselItem-img">
					<div className="hover"><span>Case Study</span></div>
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

const SimpleSlider = (data) => {
	const settings = {
		dots: false,
		arrows: false,
		adaptiveHeight: true,
		fade: true,
		pauseOnHover: false,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<div>
			<Slider {...settings}>
			{data.data.nodes.map((work,idx) => {
					return <CarouselItem idx={idx}key={idx} data={work}/>
				})
			}
			</Slider>
		</div>
	);
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
				{/* <Carousel data={allWorkJson} /> */}
				<SimpleSlider data={allWorkJson} />
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