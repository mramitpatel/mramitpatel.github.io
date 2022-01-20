import React from 'react';

export default function Footer({isHome}) {
	const classList = isHome ?"col-6 col-md-12" :'col-6 push-2 '; 
	const copyClassList = !isHome && 'push-2'
	return (
		<div className="footer">
		<div className="container">
			<div className="row">
				<div className={classList}>
					<p className="footer-copy">If you’d like to connect, see more of work, hear about my process or just chat about design, please reach out.</p>
					<a href="#" className="button">Email</a>
					<a href="#" className="button">Linkedin</a>
					<a href="#" className="button">Twitter</a>
				</div>
				<div className={`col-10 ${copyClassList}`}>
					<p className="footer-copyright">&copy; Amit Patel. All trademarks are property of their respective owners.</p>
				</div>
			</div>
		</div>
	</div>
	)
}