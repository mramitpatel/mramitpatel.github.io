import React from 'react';
import { Link } from 'gatsby';

export default function Footer({isHome}) {
	// const classList = isHome ?"col-6 col-lg-12" :'col-6 push-lg-hide col-lg-12 '; 
	// const copyClassList = !isHome && 'push-lg-hide'
	const isBrowser = typeof window !== "undefined"
	const navRowClass = isHome ? 'col-12' : 'col-10 col-md-12';
	const scrollToTop = (e) => {
		e.preventDefault();
		if(isBrowser) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}

	return (
		<div className="footer">
		<div className="container">
			<div className="row">
				{/* <div onClick={scrollToTop} className="col-2 col-md-1"><a className="scrollUp" href="#">↥</a></div>  */}
				<div className="nav col-3 col-sm-12 col-md-3">
					<Link to="/" className="button">Home</Link>
					{/* <Link to="/writing" className="button">Writing</Link> */}
					<Link to="/info" className="button">Info</Link>
				</div>
				<div className="connect col-4 col-sm-12 col-md-3">
					<a rel="noreferrer"href="mailto:amit@mramitpatel.com" className="txt-link" target="_blank">Email</a>
					<a rel="noreferrer"href="https://www.instagram.com/mramitpatel/" className="txt-link" target="_blank">Instagram</a>
					<a rel="noreferrer"href="https://www.linkedin.com/in/mramitpatel/" className="txt-link" target="_blank">Linkedin</a>
					{/*<a href="https://twitter.com/mramitpatel"  target="_blank" className="button">Twitter</a>*/}	
				</div>
			</div>
			<div className="row sub-foot">
				<div className="col-3 col-sm-12 col-md-12 copyright">Built with <a rel="noreferrer"href="https://www.gatsbyjs.com/" className="txt-link" target="_blank">GatsbyJS</a>, <a rel="noreferrer"href="https://www.gatsbyjs.com/products/cloud/" className="txt-link" target="_blank">Gatsby Cloud</a> and a lot of help from <a rel="noreferrer"href="http://www.imdkhn.com/" className="txt-link" target="_blank">Imad</a>.</div>
				<div className="push-6 push-sm-hide col-3 col-sm-12 col-md-12 copyright">© Amit Patel. All rights reserved. ✌︎</div>
			</div>

		</div>
	</div>
	)
}