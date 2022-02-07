import React from 'react';
import ProjectListItem from './ProjectListItem';

export default function ProjectList({projects}) {
	const ProjectItems = () => {
		return projects.map((p,idx)=> {
			return <ProjectListItem key={idx} hero={p.hero} position={idx} thumbnailClass={p.thumbnailClass} img={p.thumbnail} title={p.title} type={p.type} slug={p.slug}/>
		})
	}
	
	return (
		<div className="container">
			{/* <div className="row"> */}
				{/* <div className="col-12"> */}
					<div className="row project-list">
						<ProjectItems/>
					</div>
				{/* </div> */}
			{/* </div> */}
		</div>
	)
}