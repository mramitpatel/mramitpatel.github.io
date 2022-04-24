import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";


export default function Showcase() {
	const { allWorkJson } = useStaticQuery(
		graphql`
			query {
				allWorkJson {
					nodes {
						hero {
							childImageSharp {
								gatsbyImageData(
									breakpoints: [750, 1080, 1366, 1920]
									formats: WEBP
									placeholder: DOMINANT_COLOR
									quality: 100
									layout: FULL_WIDTH
								)
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
	const showcaseLen = allWorkJson.nodes.length;
	return (
		<div className="home-showcase">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2>Select Projects</h2>
					</div>
				</div>
				<Swiper
					spaceBetween={0}
					autoHeight={true}
					autoplay={{
						delay: 2500,
					}}
					loop={true}
					effect={"fade"}
					modules={[Autoplay]}

				>
					{allWorkJson.nodes.map((work,idx) => {
						work.len = showcaseLen;
						work.current = idx + 1;
						const {hero, title,type,slug,current,len} = work;
							return (
							<SwiperSlide>
								<Link state={{fromHome:true}} to={`projects/${slug}`} className='home-showcase-carouselItem'>
									<div className="row">
										<div className="col-12 home-showcase-carouselItem-img">
											<GatsbyImage  alt={title} image={hero.childImageSharp.gatsbyImageData} />
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<h4 className="home-showcase-title">{title}
												<span className="home-showcase-title-count">{current}–{len}</span>
											</h4>
											<h4 className="home-showcase-type">{type}</h4>
										</div>
									</div>
								</Link>
							</SwiperSlide>)
						})
					}
				</Swiper>
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