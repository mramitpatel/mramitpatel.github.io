import React from 'react';

export default function Footer({isHome}) {
	const classList = isHome ?"col-6 col-lg-12" :'col-6 push-lg-hide col-lg-12 '; 
	const copyClassList = !isHome && 'push-lg-hide'
	return (
		<div className="footer">
		<div className="container">
			<div className="row">
				<div className={classList}>
					<p className="footer-copy">If you’d like to connect, see more of work, hear about my process or just chat about design, please reach out.</p>
					<a href="mailto:amit@mramitpatel.com" className="button" > Email</a>
					<a href="https://www.linkedin.com/in/mramitpatel/" className="button" target="_blank"> Linkedin</a>
					<a href="https://twitter.com/mramitpatel"  target="_blank" className="button">Twitter</a>
				</div>
				<div className={`col-10 ${copyClassList}`}>
					<p className="footer-copyright">&copy; Amit Patel. All trademarks are property of their respective owners.</p>
				</div>
			</div>
		</div>
	</div>
	)
}