import React,{useEffect, useRef} from 'react';

const Title = ({title,byline}) => {
	const titleRef = useRef();
	const descRef = useRef()

	useEffect(() => {
		titleRef.current.classList.add('show');
		descRef.current.classList.add('show');
	}, [])
	return (
		<div className="writing-article-title">
			<div className="container">
				<div className="row">
					<div className="col-7 push-2 push-lg-hide col-lg-12">
						<h1 ref={titleRef} className={`writing-article-title-title`}>{title}</h1>
						<p ref={descRef} className={`writing-article-title-description`}>{byline}</p>
					</div>
				</div>
			</div>
		</div>
	)
	};

export default Title;