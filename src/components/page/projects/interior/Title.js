import React,{forwardRef,useEffect, useRef} from 'react';

const Title = forwardRef((props,ref) => {
	const {title,byline,intro,fromCaseStudy} = props;
	const titleRef = useRef();
	const descRef = useRef();
	const introRef = useRef();
	let titleClass = fromCaseStudy ? 'project-title-title-visible' : '';
	let descClass = fromCaseStudy ? 'project-title-description-visible' : '';
	let introClass = fromCaseStudy ? 'project-title-intro-visible' : '';
	useEffect(() => {
		if (!fromCaseStudy) {
			titleRef.current.classList.add('show');
			descRef.current.classList.add('show');
			document.querySelector('.project-title-intro').classList.add('show')
		} else {

		}
	}, [fromCaseStudy])
	return (
		<div ref={ref} className="project-title">
			<div className="container">
				<div className="row">
					<div className="push-2 push-md-hide col-md-8 col-xl-7 col-xxl-5">
						<h4 ref={titleRef} className={`project-title-title ${titleClass}`}>{title}</h4>
						<h1 ref={descRef} className={`project-title-description ${descClass}`}>{byline}</h1>
					</div>
					<div className="col-6 push-2 col-lg-7 push-md-hide col-md-12">
						{intro.map((ind,idx) => <p className={`project-title-intro ${introClass}`} key={idx}>{ind}</p>)}
					</div>
				</div>
			</div>
		</div>
	)
});

export default Title