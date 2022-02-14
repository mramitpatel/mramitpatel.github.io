import React, {useState, useRef} from 'react';
import { navigate } from 'gatsby';


export default function Next({data, toggleAnimation, titleRef}) {
	const {title,slug,description} = data;
	const [isAnim, setIsAnim] = useState(false)
	const nextAnimatedClass = isAnim ? 'project-next-animated' : '';
	const hideNextClass = isAnim ? 'project-next-link-hide' : '';
	const nextRef = useRef();
	const textRef = useRef();
	const currentWindowHeight = typeof window !== "undefined" && window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ?  document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;

	
	
	function caseStudyRedirect() {
		let scrollTop;
		let nextOffset;
		let diff;
		let titleOffset;
		toggleAnimation(true)
		setIsAnim(true)
		if (window) {
			scrollTop = window.scrollY;
			nextOffset = nextRef.current.offsetTop;
			titleOffset = titleRef.current.offsetTop;
			// diff = nextOffset - scrollTop + 250 - 30 - 80 - 20;
			diff = nextOffset - scrollTop + 250 + 176 - 222 - 80;
		}

		nextRef.current.style = `transform:translateY(-${diff}px)`
		setTimeout(()=> {
			navigate(
				`/projects/${slug}`,
				{
          state: { fromCaseStudy:true },
        })
			// nextRef.current.offsetTop = 222;
		}, 1000)
	}

	return (
	<div 
	ref={nextRef} 
	onClick={caseStudyRedirect} 
	className={`project-next ${nextAnimatedClass}`}>
			<div ref={textRef} className="container">
				<div className="row">
					<div className="push-2 col-2 push-lg-hide ">
						<div className={`project-next-link ${hideNextClass}`}>
							Next
						</div>
					</div>
				</div>
				<div className="row">
					<div className="push-2 col-7 push-lg-hide col-lg-12">
						<div className="project-next-title">{title}</div>
						<div className="project-next-description">{description}</div>
					</div>
				</div>

			</div>
		</div>
	)
}