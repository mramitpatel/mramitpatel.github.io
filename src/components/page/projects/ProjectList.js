import React from 'react';
import ProjectListItem from './ProjectListItem';

export default function ProjectList({projects}) {
	const ProjectItems = () => {
		return projects.map((p,idx)=> {
			console.log('p',p);
			return <ProjectListItem key={idx} position={idx} img={p.hero} title={p.title} type={p.type} slug={p.slug}/>
		})
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="project-list">
						<ProjectItems/>
					</div>
				</div>
			</div>
		</div>
	)
}