import React,{useState,useEffect} from 'react';
import { Link } from 'gatsby';
export default function Navigation({isHome}) {
	const showName = !isHome ? 'true' : false;
	const [visible, setVisible] = useState(false);
	const navClass = isHome ? 'navigation-home' : '';

	const visibleClass = visible ? 'navigation-home-visible' : 'navigation-visible';

	useEffect(()=> {
		if (isHome) {
			setVisible(true);
		}
	}, [])

	return (
		<div className="container">
			<div className="row">
				<div className='col-12'>
					
					<nav className={`navigation ${navClass} ${visibleClass}`}>
						{showName && <Link to="/"><h4>Amit Patel</h4></Link>}
						<Link to="/projects" className="button">Projects</Link>
						<Link to="/writing" className="button">Writing</Link>
						<Link to="/info" className="button">Info</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}