import React from 'react';

export default function Title({title,byline}) {
	return (
		<div className="project-title">
			<div className="container">
				<div className="row">
					<div className="col-6 push-2 ">
						<h1 className="project-title-title">{title}</h1>
						<p className="project-title-description">{byline}</p>
					</div>
				</div>
			</div>
		</div>
	)
}