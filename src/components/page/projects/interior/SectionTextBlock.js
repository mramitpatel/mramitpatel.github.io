import React from 'react';

export default function SectionTextBlock({data}) {
	const {heading,title,text} = data
	return (
		<div className="project-sectiontextblock">
			<div className="container">
				<div className="row">
				<div className="push-2 push-md-hide col-6 col-xl-6 col-md-12 col-lg-8">
					<h4 className="project-textblock-heading">
							{heading}
						</h4>
						<h2 className="project-textblock-title">
							{title}
						</h2>
						<p className="project-textblock-text">
							{text}
						</p>
					</div>
					</div>
				</div>
		</div>
	)
}