import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import ClientExperience from '../components/page/info/ClientExperience';
import Hero from '../components/page/info/Hero';
import Resume from '../components/page/info/Resume'
export default function Index() {
	return (
		<Layout pageclassName="info" type="info">
			<Seo title="Info" />
			<Hero/>
			<Resume />
			<ClientExperience/>
		</Layout>
	)
}