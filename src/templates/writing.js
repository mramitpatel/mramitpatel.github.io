import React, {useEffect, useState, useRef} from 'react';
import "../assets/scss/main.scss"
import Layout from '../components/layout';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Seo from '../components/seo'

export default function CaseStudy({pageContext}){
	const {frontmatter,html} = pageContext
	const {title} = frontmatter;

	return (
		<Layout pageClass="writing" type="writing">
			<Seo title={title} />
			<div className="container">
				<div className="row">
					<div className="col-10 push-2 push-lg-hide col-lg-12">
						<h2>{title}</h2>
						<div className="writing-content">
							<div dangerouslySetInnerHTML={{ __html: html}} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}