import React,{forwardRef,useEffect, useRef} from 'react';

const Title = forwardRef((props,ref) => {
	const {title,byline,fromCaseStudy,toggleCaseStudy} = props;
	const titleRef = useRef();
	const descRef = useRef()
	let titleCLass = fromCaseStudy ? 'project-title-title-visible' : '';
	let descClass = fromCaseStudy ? 'project-title-description-visible' : '';
	useEffect(() => {
		if (!fromCaseStudy) {
			titleRef.current.classList.add('show');
			descRef.current.classList.add('show');
			// console.log(titleRef.current);
		} else {

		}
		// toggleCaseStudy(false);
	}, [fromCaseStudy])
	return (
		<div ref={ref} className="project-title">
			<div className="container">
				<div className="row">
					<div className="col-7 push-2 push-lg-hide col-lg-12">
						<h1 ref={titleRef} className={`project-title-title ${titleCLass}`}>{title}</h1>
						<p ref={descRef} className={`project-title-description ${descClass}`}>{byline}</p>
					</div>
				</div>
			</div>
		</div>
	)
});

export default Title