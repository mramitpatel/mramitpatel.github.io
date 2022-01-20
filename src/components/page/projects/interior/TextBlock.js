import React from 'react';

export default function TextBlock({data}) {
	const {title,text} = data
	return (
		<div className="project-textblock">
			<div className="container">
				<div className="row">
					<div className="col-6 push-2 push-lg-1 col-lg-11 push-md-hide col-md-12">
						<div className="project-textblock-title">
							{title}
						</div>
						<p className="project-textblock-text">
							{text}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}