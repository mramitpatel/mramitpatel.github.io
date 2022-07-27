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
				<div className="col-3 col-md-3">
					<Link to="/" className="button">Home</Link>
					{/* <Link to="/writing" className="button">Writing</Link> */}
					<Link to="/info" className="button">Info</Link>
				</div>
				<div className="col-4 col-md-3">
					<a rel="noreferrer"href="mailto:amit@mramitpatel.com" className="txt-link" target="_blank">Email</a>
					<a rel="noreferrer"href="https://www.instagram.com/mramitpatel/" className="txt-link" target="_blank">Instagram</a>
					<a rel="noreferrer"href="https://www.linkedin.com/in/mramitpatel/" className="txt-link" target="_blank">Linkedin</a>
					{/*<a href="https://twitter.com/mramitpatel"  target="_blank" className="button">Twitter</a>*/}
					
				</div>
				<div className="col-5 col-md-12 copyright"><span className="col-2 col-md-1">© Amit Patel. All rights reserved. ✌︎</span></div>
			</div>
		</div>
	</div>
	)
}