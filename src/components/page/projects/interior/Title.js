import React,{forwardRef} from 'react';

const Title = ({title,byline,ref}) => {
	return (
		<div ref={ref} className="project-title">
			<div className="container">
				<div className="row">
					<div className="col-7 push-2 push-lg-hide col-lg-12">
						<h1 className="project-title-title">{title}</h1>
						<p className="project-title-description">{byline}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default forwardRef(Title)