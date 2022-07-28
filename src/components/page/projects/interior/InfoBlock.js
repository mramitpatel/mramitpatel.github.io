import React from 'react';

export default function InfoBlock({description,platform,duration,contribution,agency,roles}) {
	return (
		<div className="project-infoblock">
			<div className="container">
				<div className="row">
					<div className="push-sm-hide push-1 col-sm-12 col-2 col-lg-12">
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Role</div>
							{roles.map((r,idx) => <p className="project-infoblock-section-text" key={idx}>{r}</p>)}
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Contribution</div>
							<p className="project-infoblock-section-text">{contribution}</p>
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Agency</div>
							<p className="project-infoblock-section-text">{agency}</p>
						</div>
					</div>

					<div className="col-2 col-lg-12">
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Duration</div>
							<p className="project-infoblock-section-text">{duration}</p>
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Platform</div>
							<p className="project-infoblock-section-text">{platform}</p>
						</div>
					</div>



					<div className="col-6 push-lg-hide col-lg-12 ">
						<div className="project-infoblock-description">
							{description.map((d,idx) => <p key={idx}>{d}</p>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}