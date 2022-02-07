import React, {useEffect, useState, useRef} from 'react';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
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

export default function CaseStudy({pageContext}){
	const {title,
		slug,
		background,
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
	const [titleData, setTitleData] = useState();
	const titleRef = useRef();

	const ComponentList = {
		TextBlock,
		FullWidthImage,
		TwoColumnImages,
		BackgroundSwap
	};

	useEffect(() => {
		document.getElementsByTagName('body')[0].classList = []
		if(background) {
			document.getElementsByTagName('body')[0].classList.add(background);
		}
	}, [])
	
	return (
		<>
			<Seo title={title} />
			<AnimatedLayout isAnimating={isAnimiating}>
				<Header isCaseStudy={true} idx={idx} len={len} />
				<Title ref={titleRef} title={title} byline={byline} />
				<Hero img={hero} />
				<InfoBlock description={description} agency={agency} roles={roles}/>
				{
					layout.map((l,idx)=> {
						console.log({l})
						return Object.keys(l).map((c,iidx)=> {
							const Tag = ComponentList[c]
							if (l[c] != null) {
								return <Tag key={iidx} data={l[c]}/>
							}
						})
					})
				}
			</AnimatedLayout>
			<Next data={next} toggleAnimation={setIsAnimating}/>
			<AnimatedLayout isAnimating={isAnimiating}>
				<Footer isHome={false}/>
			</AnimatedLayout>
		</>
	)
}