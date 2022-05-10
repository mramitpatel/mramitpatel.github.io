import React, { useEffect } from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/page/home/Hero';

import Showcase from '../components/page/home/Showcase';
import Navigation from '../components/global/Navigation';
import Essay from '../components/page/home/Essay';
export default function Index() {
	useEffect(() => {
		document.getElementsByTagName('body')[0].classList = [];
	},[])
	return (
		<Layout pageclassName="home" type="home">
			<Seo title="Amit Patel | Creative Director and Product Designer" />
			<Hero />
			<Navigation isHome={true}/>
			<Showcase />
			{/* <Essay/> */}
		</Layout>
	)
}