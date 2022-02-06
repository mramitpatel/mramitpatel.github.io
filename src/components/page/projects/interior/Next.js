import React, {useState} from 'react';
import { navigate } from 'gatsby';


export default function Next({data, toggleAnimation, titleRef}) {
	const {title,slug,description} = data;
	const [isAnim, setIsAnim] = useState(false)
	const nextAnimatedClass = isAnim ? 'project-next-animated' : '';
	const hideNextClass = isAnim ? 'project-next-link-hide' : '';

	function caseStudyRedirect() {
		// document.getElementsByTagName('body')[0].style ="overflow:hidden"
		toggleAnimation(true)
		setIsAnim(true)
		setTimeout(()=> {
			navigate(`/projects/${slug}`)
		}, 1000)
	}

	return (
		<div className={`project-next ${nextAnimatedClass}`}>
			<div className="container">
				<div className="row">
					<div className="push-7 col-2">
						<div className={`project-next-link ${hideNextClass}`} onClick={caseStudyRedirect}>
							Next
						</div>
					</div>
				</div>
				<div className="row">
					<div className="push-2 col-6">
						<div className="project-next-title">{title}</div>
						<div className="project-next-description">{description}</div>
					</div>
				</div>

			</div>
		</div>
	)
}