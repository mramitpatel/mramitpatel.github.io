import React from 'react';

export default function FullWidthVideo({data}) {
	const {videoSrc} = data
	return (
		<div className="project-fullwidthvideo">
			console.logt("video");
			<div className="container">
				<div className="row">
					<div className="col-12">
						<iframe
      						src={videoSrc}
					    	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      						frameBorder="0"
      						webkitallowfullscreen="true"
      						mozallowfullscreen="true"
      						allowFullScreen
    					/>
					</div>
				</div>
			</div>
		</div>
	)
}