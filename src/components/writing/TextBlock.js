import React from 'react';

export default function TextBlock({title,text}) {
	return (
		<div className="writing-article-textblock">
			<div className="container">
				<div className="row">
					<div className="col-6 push-2 push-lg-1 col-lg-11 push-md-hide col-md-12">
						<h4 className="writing-article-textblock-title">
							{title!= null && title}
						</h4>
							{text.map((t) => <p className="writing-article-textblock-text">{t}</p>)}
					</div>
				</div>
			</div>
		</div>
	)
}