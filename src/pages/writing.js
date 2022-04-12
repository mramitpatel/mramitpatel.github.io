import Essay from '../components/page/home/Essay';
import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Writing() {
	return (
		<Layout pageClass="info" type="info">
			<Seo title="Writing" />
			<Essay />
		</Layout>
	)
}

