import * as React from 'react';
import '../stylesheets/Profile.css';

class Profile extends React.Component {
	public render() {
		return (
			<div className="profile container">
				<div className="row">
					<div className="col-sm-6 profile-history">
						<h3><i className="fas fa-history counter-spin" /> History <i className="fas fa-history counter-spin" /></h3>
						<p>
							I come from <strong>Ho Chi Minh, Vietnam</strong>, a beautiful country with lots of delicious food <i className="fas fa-utensils" />.
							I earned my first <i className="fas fa-flask" /> degree in <strong>Physics, Statistics and Chemistry</strong> from the <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">University of Toronto <i className="fas fa-external-link-alt" /></a>.
							After that, I completed a 1-year master's degree in <strong>Bioinformatics</strong> from the <a href="https://www.uoguelph.ca" target="_blank" rel="noopener noreferrer">University of Guelph <i className="fas fa-external-link-alt" /></a>, with a project in cancer genomic and proteomic statistical analyses.
							During this period, I focused on expanding my <strong>machine learning</strong> theoretical knowledge and practical skill sets, mostly in <strong>Python</strong> and <strong>R</strong>.
						</p>
					</div>

					<div className="col-sm-6 profile-current">
						<h3><i className="fas fa-sync-alt fa-spin" /> Current <i className="fas fa-sync-alt fa-spin" /></h3>
						<p>
							I am pursuing a second bachelor's degree in <strong>Computer Science</strong> at the University of British Columbia, with 3rd-year standing.
							I love visualising and analysing all kinds of <strong>data</strong> <i className="fas fa-chart-pie" /> <i className="fas fa-chart-line" /> <i className="fas fa-chart-bar" /> <i className="fas fa-chart-area" />; thus I usually describe myself as a <strong>data-driven</strong> person.
							This personal website is my first attempt at using <strong>ReactJS</strong> framework, with <strong>TypeScript</strong>, custom <strong>CSS</strong> and <strong>Bootstrap</strong>.
							I am open to opportunities as a software/web developer.
							<br /><strong>Interested?</strong> <a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">Let me know <i className="far fa-paper-plane" /></a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;