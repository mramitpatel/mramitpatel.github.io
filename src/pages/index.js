import React, { useEffect } from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/page/home/Hero';
import Essay from '../components/page/home/Essay';
import Showcase from '../components/page/home/Showcase';
import Navigation from '../components/global/Navigation';
export default function Index() {
	useEffect(() => {
		document.getElementsByTagName('body')[0].classList = [];
	},[])
	return (
		<Layout pageClass="home" type="home">
			<Seo title="Home" />
			<Hero />
			<Navigation isHome={true}/>
			<Showcase />
			<Essay />
		</Layout>
	)
}