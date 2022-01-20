import React, {useEffect} from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo'
import Title from '../components/page/projects/interior/Title'
import Hero from '../components/page/projects/interior/Hero'
import InfoBlock from '../components/page/projects/interior/InfoBlock';
import TextBlock from '../components/page/projects/interior/TextBlock';
import FullWidthImage from '../components/page/projects/interior/FullWidthImage';
import TwoColumnImages from '../components/page/projects/interior/TwoColumnImages';
import Next from '../components/page/projects/interior/Next';

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
		next} = pageContext
		const ComponentList = {
			TextBlock,
			FullWidthImage,
			TwoColumnImages,
		};

		useEffect(() => {
			document.getElementsByTagName('body')[0].classList = []
			if(background) {
				document.getElementsByTagName('body')[0].classList.add(background);
			}
		}, [])

	return (
		<Layout pageClass="project" type="case">
			<Seo title={title} />
			<Title title={title} byline={byline} />
			<Hero img={hero} />
			<InfoBlock description={description} agency={agency} roles={roles}/>
			{
				layout.map((l,idx)=> {
					return Object.keys(l).map((c,iidx)=> {
						const Tag = ComponentList[c]
						if (l[c] != null) {
							return <Tag key={iidx} data={l[c]}/>
						}
					})
				})
			}
			<Next data={next}/>
		</Layout>
	)
}