import React,{useState,useEffect} from 'react';
import { Link } from 'gatsby';
export default function Navigation({isHome}) {
	const showName = !isHome ? 'true' : false;
	const [visible, setVisible] = useState(false);
	const navClass = isHome ? 'navigation-home' : '';
	const navRowClass = isHome ? 'col-12' : 'col-10 col-md-12';
	const visibleClass = visible ? 'navigation-home-visible' : 'navigation-visible';

	useEffect(()=> {
		if (isHome) {
			setVisible(true);
		}
	}, [])
	
	return (
		<div className="container">
					<nav className={`navigation ${navClass} ${visibleClass}`}>
			<div className="row">
					
						<div className="col-2 col-md-12">
							{showName && <Link to="/"><h4>Amit Patel</h4></Link>}
						</div>
						<div className={navRowClass}>
							<Link to="/projects" className="button">Work</Link>
							<Link to="/writing" className="button">Writing</Link>
							<Link to="/info" className="button">Info</Link>
						</div>
						
					
			</div>
					</nav>
		</div>
	)
}