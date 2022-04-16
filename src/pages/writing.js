import React from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

export default function Writing() {
	return (
		<Layout pageClass="writing" type="info">
			<Seo title="Writing" />
			<div className="container">
				<div className="row">
					<div className="push-2 col-10 push-lg-hide col-lg-12">
						<h1 class="writing-title">Select Writing</h1>
						<p className="writing-description">Sometimes I write</p>

						<div className="writing-list">
							<Link to='/writing/name' className="writing-list-item">
							New Kanye Album is Mid <StaticImage src={'../images/arrow.png'}/>
							</Link>
							<Link to='/writing/name' className="writing-list-item">
							New Kanye Album is Mid <StaticImage src={'../images/arrow.png'}/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

