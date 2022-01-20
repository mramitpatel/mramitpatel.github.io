import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import ClientExperience from '../components/page/info/ClientExperience';
import Hero from '../components/page/info/Hero';

export default function Index() {
	return (
		<Layout pageClass="info" type="info">
			<Seo title="Info" />
			<Hero/>
			<ClientExperience/>
		</Layout>
	)
}