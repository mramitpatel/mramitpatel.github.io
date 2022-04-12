import React from 'react';

const exp = [
	{
		year:'2016-2022',
		company: 'The Office of Experience',
		title: 'Creative Director',
		description:["Designed B2B and B2C experieces for brands like Spectrum Enterprise, D’Addario, Mack Trucks."
		,"Digital Marketing, T-shaped, cross-disciplinary designer focusing on B2B enterprise digital experiences, products and brand strategy. Insights lead approac."]
	},
	{
		year:'2008–2016',
		company: 'UnitOneNine',
		title: 'Creative Director',
		description:["Designed B2B and B2C experieces for brands like Spectrum Enterprise, D’Addario, Mack Trucks."
		,"Digital Marketing, T-shaped, cross-disciplinary designer focusing on B2B enterprise digital experiences, products and brand strategy. Insights lead approac."]
	},
	{
		year:'2006–2008',
		company: 'SomeOddPilot, Royal Order, Sender',
		title: 'Designer',
		description:["Designed B2B and B2C experieces for brands like Spectrum Enterprise, D’Addario, Mack Trucks."
		,"Digital Marketing, T-shaped, cross-disciplinary designer focusing on B2B enterprise digital experiences, products and brand strategy. Insights lead approac."]
	},
]

const ExperienceItem = ({year,company,title,description}) => {
	return(
		<div className="resume-item">
			<div class="row">
				<div className="push-2 col-4 push-lg-hide col-lg-12 resume-item-left">
					<div className="resume-item-year">{year}</div>
				</div>
				<div className="col-6 col-lg-12 resume-item-right">
				<div className="resume-item-company">{company}</div>
				<div className="resume-item-title">{title}</div>
				<div className="resume-item-description">{description.map((d,idx) => <p key={idx}>{d}</p>)}</div>
				</div>
		</div>
		</div>
	)
}
const ExperienceList = ({data}) => {
	return (
		<div className="resume-list">
			{data.map((c,idx)=> <ExperienceItem key={c.title} year={c.year} company={c.company} title={c.title} description={c.description}/>)}
		</div>
	)
}

export default function ClientExperience() {
	return (
		<div className="clientExperience">
			<div className="container">
				<div className="row">
					<div className="col-9 push-2 push-lg-hide col-lg-12 col-md-12">
						<h2>Experience</h2>
					</div>
				</div>
				{<ExperienceList data={exp}/>	}
			</div>
		</div>
	)
}