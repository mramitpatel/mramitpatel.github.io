import React from 'react';

export default function FullWidthVideo({data}) {
	return (
		<div className="project-fullwidthvideo">
			<div className="container">
				<div className="row">
					<div className="col-8 push-2">
						<div className="responsive-iframe-container">
						<iframe className='responsive-iframe'
      						src={data.videoSrcURL}
					    	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      						frameBorder="0"
      						webkitallowfullscreen="true"
      						mozallowfullscreen="true"
      						allowFullScreen="false"
    					/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}