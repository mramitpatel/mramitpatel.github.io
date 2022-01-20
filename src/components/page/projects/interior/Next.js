import { Link } from 'gatsby';
import React from 'react';


export default function Next({data}) {
	const {title,slug,description} = data;
	return (
		<div className="project-next">
			<div className="container">
				<div className="row">
					<div className="push-7 col-2">
						<div className="project-next-link">
							<Link to={`/projects/${slug}`}>Next</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="push-3 col-6">
						<div className="project-next-title">{title}</div>
						<div className="project-next-description">{description}</div>
					</div>
				</div>

			</div>
		</div>
	)
}