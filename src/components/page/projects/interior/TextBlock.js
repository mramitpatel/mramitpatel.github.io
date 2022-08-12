import React from 'react';

export default function TextBlock({data}) {
	const {title,text} = data
	return (
		<div className="project-textblock">
			<div className="container">
				<div className="row">
				<div className="push-2 push-md-hide col-6 col-md-12 col-lg-8 col-xl-6 col-xxl-6">
						<h4 className="project-textblock-heading">
							{title}
						</h4>
						{text.map((t,idx)=> <p className="project-textblock-text" key={idx}>{t}</p>)}
					</div>
				</div>
			</div>
		</div>
	)
}
