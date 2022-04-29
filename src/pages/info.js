import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import ClientExperience from '../components/page/info/ClientExperience';
import Hero from '../components/page/info/Hero';
import Resume from '../components/page/info/Resume'
export default function Index() {
	return (
<<<<<<< Updated upstream
		<Layout pageclassName="info" type="info">
			<Seo title="Info" />
=======
		<Layout pageClass="info" type="info">
			<Seo
				title="About Amit Patel, Creative Director, Product Designer, Chicago"
				description="Amit Patel is a hands-on creative director, product designer and brand builder; currently based in Chicago, IL"
				/>
>>>>>>> Stashed changes
			<Hero/>
			<Resume />
			<ClientExperience/>
		</Layout>
	)
}