import React from 'react';

export default function InsetFigmaEmbed({data}) {
	return (
		<div className="project-fullwidthvideo">
			<div className="container">
				<div className="row">
				<div className="push-2 col-xxl-8 col-xl-10 push-xl-1 push-md-1 col-md-10 col-sm-12 push-sm-hide">
				<div className="responsive-iframe-container">
						<iframe className='responsive-iframe'
      						src={data.FigmaEmbedURL}
    					/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
