import React, {useEffect, useState, useRef} from 'react';
import "../assets/scss/main.scss"
import Header from '../components/global/Header';
import Seo from '../components/seo'
import AnimatedLayout from '../components/page/projects/interior/AnimatedLayout'
import Title from '../components/page/projects/interior/Title'
import Hero from '../components/page/projects/interior/Hero'
import InfoBlock from '../components/page/projects/interior/InfoBlock';
import TextBlock from '../components/page/projects/interior/TextBlock';
import FullWidthImage from '../components/page/projects/interior/FullWidthImage';
import InsetWidthImage from '../components/page/projects/interior/InsetWidthImage';
import FullWidthVideo from '../components/page/projects/interior/FullWidthVideo';
import TwoColumnImages from '../components/page/projects/interior/TwoColumnImages';
import Next from '../components/page/projects/interior/Next';
import BackgroundSwap from '../components/page/projects/interior/BackgroundSwap';
import ScrollToShow from '../components/page/projects/interior/ScrollToShow';
import { navigate } from 'gatsby';


export default function CaseStudy({pageContext,location}){
	const {title,
		roles,
		hero,
		slug,
		description,
		byline,
		agency,
		contribution,
		duration,
		platform,
		layout,
		next,
		idx,
		len
	} = pageContext;

	const anchor = `#${slug}`;
	const [isAnimiating, setIsAnimating] = useState(false);
	const titleRef = useRef();
	const headerRef = useRef();
	const [fromCaseStudy, setFromCaseStudy] = useState(false);
	const ComponentList = {
		TextBlock,
		FullWidthImage,
		InsetWidthImage,
		FullWidthVideo,
		TwoColumnImages,
		BackgroundSwap
	};



	useEffect(() => {
		const closeCaseStudy = (e) => {
			if (e.key === "Escape") {
				navigate(
					`/#${slug}`,
					{
						state: { fromCaseStudy:false,fromHome: false },
					})
			}
		};
		document.addEventListener("keydown", closeCaseStudy, false);
	}, [location.state])
	
	useEffect(() => {
		if(location.state != null ) {
			setFromCaseStudy(location.state.fromCaseStudy)
		}
	}, [fromCaseStudy,location.state])
	return (
		<div id={anchor}>
			<Seo title={title} description={description[0]} image={hero.childImageSharp.gatsbyImageData.images.fallback.src}/>
			<AnimatedLayout isAnimating={isAnimiating}>
				<Header ref={headerRef} headerType='caseStudy' anchor={anchor} location={location} idx={idx} len={len} />
				<Title 
					toggleCaseStudy={setFromCaseStudy} 
					fromCaseStudy={fromCaseStudy} 
					ref={titleRef} 
					idx={idx}
					len={len}
					title={title} 
					byline={byline} />
				<Hero 
					img={hero} alt={title}/>
					<ScrollToShow  component={<InfoBlock description={description} duration={duration} platform={platform} agency={agency} contribution={contribution} roles={roles}/>}/>
				{
					layout.map((l,idx)=> {
						return Object.keys(l).map((c,iidx)=> {
							const Tag = ComponentList[c]
							if (l[c] != null) {
								// return <ScrollToShow  key={iidx} component={<Tag data={l[c]}/>}/>
								return <Tag key={iidx} data={l[c]}/>
								
							} else {
								return null
							}
						})
					})
				}
			</AnimatedLayout>
			<Next data={next} headerRef={headerRef} titleRef={titleRef} toggleAnimation={setIsAnimating}/>
		</div>
	)
}