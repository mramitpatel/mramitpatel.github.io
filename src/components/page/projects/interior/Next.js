import React, {useState, useRef,useCallback,useEffect} from 'react';
import { navigate } from 'gatsby';


export default function Next({data, toggleAnimation, titleRef}) {
	const {title,slug,description} = data;
	const [isAnim, setIsAnim] = useState(false)
	const nextAnimatedClass = isAnim ? 'project-next-animated' : '';
	const hideNextClass = isAnim ? 'project-next-link-hide' : '';
	const nextRef = useRef();
	const textRef = useRef();

	const hiddenRef = useRef();
	const isBrowser = typeof window !== "undefined"
	
	const scrollHandler = useCallback(() => {
		if(isBrowser) {
			const currentColor = document.getElementsByTagName('body')[0].classList[0];
			if (window.pageYOffset + window.innerHeight >= nextRef.current.offsetTop && currentColor != null) {
				document.getElementsByTagName('body')[0].classList.remove('black');
			}
		}

	},[]);

	useEffect(() => {
		if(isBrowser) {
			window.addEventListener('scroll', scrollHandler);
			return () => {
				window.removeEventListener('scroll', scrollHandler);
			}
		}

	}, [nextRef, scrollHandler]);


	function caseStudyRedirect() {
		let scrollTop;
		let nextData;
		let diff;
		let diff1;
		let titleOffset;
		let currentWindowHeight;
		toggleAnimation(true)
		setIsAnim(true)
		if (window) {
			document.querySelector('body').classList.add('overflow');
			currentWindowHeight = window.innerHeight;
			nextData = nextRef.current.getBoundingClientRect();
			titleOffset = document.querySelector('.project-title-titleContainer').offsetTop;
			diff = nextRef.current.offsetTop - window.scrollY - titleOffset;
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
	
	onClick={caseStudyRedirect} 
	className={`project-next ${nextAnimatedClass}`}>
			<div ref={textRef} className="container">
				<div className="row">
					<div className="push-2 push-md-hide col-md-8 col-xl-7 col-xxl-5">
						<h4 className={`project-next-link ${hideNextClass}`}>
							Next
						</h4>
					</div>
				</div>
				<div className="row">
					<div ref={nextRef}  className="project-next-titleContainer push-2 push-md-hide col-md-8 col-xl-7 col-xxl-5">
						<h4 className="project-next-title">{title}</h4>
						<h1 className="project-next-description">{description}</h1>
					</div>
				</div>

			</div>
		</div>
	)
}