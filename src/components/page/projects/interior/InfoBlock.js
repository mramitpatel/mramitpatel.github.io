import React from 'react';

export default function InfoBlock({description,platform,duration,roleDescription,challenge,agency,roles}) {
	return (
		<div className="project-infoblock">
			<div className="container">
				<div className="row">
					<div className="push-2 push-md-hide col-6 col-xl-6 col-md-12 col-lg-8">
						<h4 className="project-textblock-heading"><span>The Challenge</span></h4>
						<h2 className="project-infoblock-challenge">{challenge}</h2>
					</div>

				<div className="push-2 col-5 push-md-hide col-xl-5 col-md-8 col-lg-5">
						<div className="project-infoblock-description">
							{description.map((d,idx) => <p key={idx}>{d}</p>)}
						</div>
						<div className="project-infoblock-roleDescription">
						<h4 className="project-textblock-heading">My Role</h4>
							{roleDescription.map((rd,idx) => <p key={idx}>{rd}</p>)}
						</div>
					</div>

					<div className="push-1 col-3 push-md-hide push-sm-hide col-xxl-2">
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Role</div>
							{roles.map((r,idx) => <p className="project-infoblock-section-text" key={idx}>{r}</p>)}
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Agency</div>
							<p className="project-infoblock-section-text">{agency}</p>
						</div>

						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Duration</div>
							<p className="project-infoblock-section-text">{duration}</p>
						</div>
						<div className="project-infoblock-section">
							<div className="project-infoblock-section-title">Platform</div>
							<p className="project-infoblock-section-text">{platform}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}