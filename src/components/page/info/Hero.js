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
					<div className="col-6  col-lg-12">
						<StaticImage height={636} src="../../../images/Amit_Patel.jpg" alt="Amit Patel" />
					</div>
					<div className="col-5 col-lg-12">
						<div className="info-hero-content">
							<h1>I’m a multidisciplinary creative director with over a decade of agency experience.</h1>
							<p>My passion lies in designing experiences that matter across digital experiences and transformative products. I’m currently a Creative Director at The Office of Experience in Chicago.</p>
							<p>Reach out on <a href="https://www.linkedin.com/in/mramitpatel/" target="_blank">LinkedIn</a>, <a href="https://www.instagram.com/mramitpatel/" target="_blank">Instagram</a> or by <a href="mailto:amit@mramitpatel.com">Email</a>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
