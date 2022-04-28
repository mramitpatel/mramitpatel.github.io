import React from 'react';

export default function Footer({isHome}) {
	const classList = isHome ?"col-6 col-lg-12" :'col-6 push-lg-hide col-lg-12 '; 
	const copyClassList = !isHome && 'push-lg-hide'
	return (
		<div className="footer">
		<div className="container">
			<div className="row">
				<div class="col-2 col-md-12"><a className="button scrollUp" href="#">↥</a></div>
				<div class="col-9 col-md-12">
					<a href="mailto:amit@mramitpatel.com" className="button" >Email</a>
					<a href="https://www.instagram.com/mramitpatel/" className="button" target="_blank">Instagram</a>
					<a href="https://www.linkedin.com/in/mramitpatel/" className="button" target="_blank">Linkedin</a>
					{/*<a href="https://twitter.com/mramitpatel"  target="_blank" className="button">Twitter</a>*/}
					
				</div>
				<div class="col-1 col-md-12"><span>✌︎</span></div>
{/*				<div className={`col-10 ${copyClassList}`}>
					<p className="footer-copyright">&copy; Amit Patel. All trademarks are property of their respective owners.</p>
				</div> */}
			</div>
		</div>
	</div>
	)
}