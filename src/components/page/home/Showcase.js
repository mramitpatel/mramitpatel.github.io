import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Keyboard, EffectFade } from 'swiper';
import 'swiper/css/bundle';


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
						<h2>Select Work</h2>
					</div>
				</div>
				<Swiper
					spaceBetween={30}
					speed={400}
					autoplay={{
						delay: 5000,
					  }}
					waitForTransition={false}
					grabCursor={true}
					autoHeight={true}
					keyboard={{
						enabled: true,
						onlyInViewport: true,
					}}
					effect={"fade"}
					loop={true}
					modules={[Autoplay, EffectFade, Keyboard]}

				>
					{allWorkJson.nodes.map((work,idx) => {
						work.len = showcaseLen;
						work.current = idx + 1;
						const {hero, title,type,slug,current,len} = work;
							return (
							<SwiperSlide key={idx}>
								<Link state={{fromHome:true}} to={`projects/${slug}`} className='home-showcase-carouselItem'>
									<div className="row">
										<div className="col-12 home-showcase-carouselItem-img">
											<GatsbyImage  alt={title} image={hero.childImageSharp.gatsbyImageData} />
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<div className="home-showcase-content">
											<h4 className="home-showcase-content-title">{title}
												<span className="home-showcase-content-title-count">{current}–{len}</span>
											</h4>
											<h4 className="home-showcase-content-type">{type}</h4>
											</div>
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