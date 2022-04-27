import React from 'react';

const clientData = [
	{
		"title": "Tate & Lyle",
		"description": "Lead creative strategy and design for multi-channel, performance digital marketing efforts."
	},
	{
		"title": "Patagonia",
		"description": "Patagonia Tin-Shed, website maintenance, other experiences."
	},
	{
		"title": "CSA",
		"description": "Brand identity, branding, photography direction for a global provider of standards and testing."
	},
	{
		"title": "Mack",
		"description": "Digital design, marketing, product launch for the American trucking legend."
	},
	{
		"title": "Philadelphia Federal Reserve",
		"description": "Content strategy and template design based off research and insights."
	},
	{
		"title": "Sysco",
		"description": "Product design for one of America’s largest food distributers."
	},
	{
		"title": "Obama Presidential Campaign",
		"description": "Brand identity for the iconic Obama’s Presidential Campaign"
	},
	{
		"title": "Fusion Global Academy",
		"description": "Branding, marketing strategy and website design for a pioneer in e-learning."
	},
	{
		"title": "CoolerScreens",
		"description": "Advertising and IoT at the forefront of the freezer aisle."
	},
	{
		"title": "D’Addario",
		"description": "E-Com design for a music legend."
	},
	{
		"title": "Dot Foods",
		"description": "E-Com design for enterprise food distribution."
	},
	{
		"title": "FLOR",
		"description": "Brand website and product design for an interactive rug builder."
	},
	{
		"title": "Diebold-Nixdorf",
		"description": "Website redesign, digital marketing and lead generation tactics."
	},
	{
		"title": "Sirva",
		"description": "Digitizing employee relocation with insights led product design and branding."
	},
	{
		"title": "Chicago School of Business",
		"description": "Brand extension, digital marketing."
	},
	{
		"title": "SeaRay",
		"description": "Product naming and advertising design."
	},
	{
		"title": "Spectrum Enterprise",
		"description": "Digital products and website design for B2B Enterprise Telecom provider."
	},
	{
		"title": "PwC",
		"description": "Dashboard and intranet design for employees around the globe."
	},
	{
		"title": "Mango Languages",
		"description": "Brand strategy, identity and expression for a language learning start-up."
	}
]

const ClientItem = ({title,description}) => {
	return(
		<div className="clientExperience-list-item">
			<div className="clientExperience-list-item-title">{title}</div>
			<div className="clientExperience-list-item-description">{description}</div>
		</div>
	)
}
const ClientList = ({data}) => {
	return (
		<div className="clientExperience-list">
			{data.map((c,idx)=> <ClientItem key={c.title} title={c.title} description={c.description}/>)}
		</div>
	)
}

export default function ClientExperience() {
	return (
		<div className="clientExperience">
			<div className="container">
				<div className="row">
					<div className="col-9 push-2 push-lg-hide col-lg-12 col-md-12">
						<h2>Client Experience</h2>
						{<ClientList data={clientData}/>	}
					</div>
				</div>
			</div>
		</div>
	)
}