import React from 'react'

export default function Essay() {
	return (
		<div className="essay">
			<div className="container">
				<div className="row">
					<div className="col-5 col-md-12">
						<h2>Essays</h2>
					</div>
					<div className="col-7 col-md-12">
						<ul className="essay-list">
							<li><a href="#">New Kanye album is mid.</a></li>
							<li><a href="#">New Kanye album is mid.</a></li>
							<li><a href="#">New Kanye album is mid.</a></li>
							<li><a href="#">New Kanye album is mid.</a></li>
							<li><a href="#">New Kanye album is mid.</a></li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="essay-button">
							<a href="" className="button">All Essays</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}