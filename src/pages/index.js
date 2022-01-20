import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/page/home/Hero';
import Essay from '../components/page/home/Essay';
import Showcase from '../components/page/home/Showcase';
export default function Index() {
	return (
		<Layout pageClass="home" type="home">
			<Seo title="Home" />
			<Hero />
			<Showcase />
			<Essay />
		</Layout>
	)
}