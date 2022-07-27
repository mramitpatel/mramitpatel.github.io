import React from 'react';
import ProjectListItem from '../projects/ProjectListItem';
import Homebio from './HomeBio';


export default function ProjectList({projects, sectionContainer}) {
	const ProjectItems = () => {
		return projects.map((p,idx)=> {
			if(idx == 2) {
				return (
					<>
					<ProjectListItem key={idx} hero={p.hero} position={idx} thumbnailClass={p.thumbnailClass} img={p.thumbnail} byline={p.byline} title={p.title} type={p.type} slug={p.slug}/>
					<Homebio/>
					</>
				)
			} else if (idx == 5) {
				<>
				<ProjectListItem key={idx} hero={p.hero} position={idx} thumbnailClass={p.thumbnailClass} img={p.thumbnail} title={p.title} type={p.type} byline={p.byline} slug={p.slug}/>
				<Homebio/>
				</>
			}
			else {
				return <ProjectListItem key={idx} hero={p.hero} position={idx} thumbnailClass={p.thumbnailClass} img={p.thumbnail} title={p.title} type={p.type} byline={p.byline} slug={p.slug}/>

			}
		})
	}

	return (
		<div className={`${sectionContainer}`}>
			<div className="container">
				<div className="row project-list">
					<div class="col-12"><h3>Select Work</h3></div>
					<ProjectItems/>
				</div>
			</div>
		</div>
	)
}