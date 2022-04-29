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
import TwoColumnImages from '../components/page/projects/interior/TwoColumnImages';
import Next from '../components/page/projects/interior/Next';
import BackgroundSwap from '../components/page/projects/interior/BackgroundSwap';
import ScrollToShow from '../components/page/projects/interior/ScrollToShow';
import { navigate } from 'gatsby';


export default function CaseStudy({pageContext,location}){
	const {title,
		roles,
		hero,
		description,
		byline,
		agency,
		layout,
		next,
		idx,
		len
	} = pageContext;


	const [isAnimiating, setIsAnimating] = useState(false);
	const titleRef = useRef();
	const headerRef = useRef();
	const [fromCaseStudy, setFromCaseStudy] = useState(false);
	const ComponentList = {
		TextBlock,
		FullWidthImage,
		TwoColumnImages,
		BackgroundSwap
	};



	useEffect(() => {
		const closeCaseStudy = (e) => {
			if (e.key === "Escape") {
				if(location.state.fromHome) {
					navigate(
						`/`,
						{
							state: { fromCaseStudy:false,fromHome: false },
						})
				} else {
					navigate(
						`/projects/`,
						{
							state: { fromCaseStudy:false },
						})
				}
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
		<>
			<Seo title={title} description={description[0]}/>
			<AnimatedLayout isAnimating={isAnimiating}>
				<Header ref={headerRef} isCaseStudy={true} location={location} idx={idx} len={len} />
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
					<ScrollToShow  component={<InfoBlock description={description} agency={agency} roles={roles}/>}/>
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
		</>
	)
}