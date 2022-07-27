import React from 'react';
import ProjectListItem from './ProjectListItem';


export default function ProjectList({projects, projectContainer}) {
	const ProjectItems = () => {
		return projects.map((p,idx)=> {
			return <ProjectListItem key={idx} hero={p.hero} position={idx} thumbnailClass={p.thumbnailClass} img={p.thumbnail} title={p.title} type={p.type} byline={p.byline} slug={p.slug}/>
		})
	}

	return (
		<div className={`${projectContainer}`}>
		<div className="container">
			<div className="row project-list">
				<ProjectItems/>
			</div>
		</div>
		</div>
	)
}