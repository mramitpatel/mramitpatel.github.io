import React, {useState,useEffect} from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
	const [visible, setVisible] = useState(false);
	const heroClass = visible ? 'info-hero-visible': '';
	useEffect(() => {
		setVisible(true);
	}, []);
	return (
		<div className={`info-hero ${heroClass}`}>
			<div className="container">
				<div className="row">
					<div className="col-5 col-md-12 push-lg-hide">
						<StaticImage height={800} objectFit="cover" layout="constrained" src="../../../images/Amit_Patel.jpg" alt="Hi, this is a photo of me, Amit Patel" />
					</div>
					<div className="col-6 col-md-12">
						<div className="info-hero-content">
							<h1>I’m a multidisciplinary designer with over a decade of agency experience.</h1>
							<p>My passion lies in creating digital experiences at the intersection of brand, product and technology. I’m currently open for contract or full-time engagements.</p>
							<p>Reach out on <a className="txt-link" href="https://www.linkedin.com/in/mramitpatel/" target="_blank">LinkedIn</a>, <a className="txt-link" href="https://www.instagram.com/mramitpatel/" target="_blank">Instagram</a> or by <a className="txt-link" href="mailto:amit@mramitpatel.com">email</a>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
