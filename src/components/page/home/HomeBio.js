import React, {useState,useEffect} from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import Hcd from "/src/svg/hcd.inline.svg";

export default function Hero() {
	const [visible, setVisible] = useState(false);
	const heroClass = visible ? 'info-hero-visible': '';
	useEffect(() => {
		setVisible(true);
	}, []);
	return (
		<div className={`home-bio ${heroClass} col-lg-12`}>
			<div className="container">
				<div className="row">
				<div className="content push-1 col-5 col-lg-5 col-md-12 col-sm-12 col-xl-5 ">
							<h3>For over a decade, I've applied human-centered design to help teams solve complex challenges.</h3>
							<Link to="/info" className="button button--invert">More about me</Link>
					</div>

					<img className="content col-6 col-sm-12 col-md-12 col-lg-6 col-xl-6" src={Hcd} alt="Border"/>


				</div>
			</div>
		</div>
	)
}
