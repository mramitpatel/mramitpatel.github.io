import React from 'react';

export default function InfoBlock({description,agency,roles}) {
	return (
		<div className="project-infoblock">
			<div className="container">
				<div className="row">
					<div className="col-6 push-2 push-lg-hide col-lg-12 ">
						<div className="project-infoblock-description">
							{description.map((d,idx) => <p key={idx}>{d}</p>)}
						</div>
					</div>
					<div className="col-3 col-lg-12">
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Agency</div>
							<p className="project-infoblock-section-text">{agency}</p>
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Role</div>
							{roles.map((r,idx) => <p className="project-infoblock-section-text" key={idx}>{r}</p>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}