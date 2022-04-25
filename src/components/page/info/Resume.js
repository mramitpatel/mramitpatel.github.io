import React from 'react';

const exp = [
	{
		year:'2016-2022',
		company: 'The Office of Experience',
		title: 'Creative Director',
		description:["At OX, I lead design initiatives across brand, product and digital projects. I was fortunate to work with some of the most talented designers, strategists and practitioners in Chicago - over the course of 6 years, the team grew from 8 to 60, changed offices once, and went on 4 boat parties.","I was focused on building a team of designers that were well versed in Product Design tools and process – introducing Figma and Sketch into our workflow and set the foundation for component based design.", "While at OX, I redesigned Spectrum Enterprise's web experience, led the creative marketing execution for Tate & Lyle, oversaw the design and UX of Dot Foods B2B E-Commerce platform and made many friends along the way."]
	},
	{
		year:'2010–2016',
		company: 'UnitOneNine',
		title: 'Creative Director',
		description:["A team of two is mightier than a team of twenty. At UON, a small, nimble team managed the redesign of large enterprise websites such as JLL.com as well making time for launching a successful marketing/design meetup group called CISC. I was fortunate to lead visual design and UX for the re-platforming of Beam Brand websites as well envisioning LasikPlus.com "]
	},
	{
		year:'2006–2010',
		company: 'SomeOddPilot, Royal Order, Sender',
		title: 'Designer',
		description:["Designed web, print, brand experiences for Patagonia, Mozilla, NEC and (Former) President Obama 2008 Inaugural Campaign."
		,""]
	},
]

const ExperienceItem = ({year,company,title,description}) => {
	return(
		<div className="resume-item">
			<div class="row">
				<div className="push-2 col-4 push-lg-hide col-lg-12 resume-item-left">
					<div className="resume-item-year">{year}</div>
				</div>
				<div className="col-5 col-lg-12 resume-item-right">
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