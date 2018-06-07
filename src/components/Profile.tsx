import * as React from 'react';

import bootstrapImg from '../images/bootstrap-plain-wordmark.svg';
import cImg from '../images/c-plain.svg';
import cplusplusImg from '../images/cplusplus-plain.svg';
import css3Img from '../images/css3-plain-wordmark.svg';
import gitImg from '../images/git-plain-wordmark.svg';
import html5Img from '../images/html5-plain-wordmark.svg';
import javaImg from '../images/java-plain-wordmark.svg';
import javascriptImg from '../images/javascript-plain.svg';
import pythonImg from '../images/python-plain-wordmark.svg';
import reactImg from '../images/react-original-wordmark.svg';
import typescriptImg from '../images/typescript-plain.svg';

import '../stylesheets/Profile.css';


class Profile extends React.Component {
	public render() {
		return (
			<div id="profile" className="container-fluid">
				<div className="row header"><h2>Profile</h2></div>
				<div className="row">
					<div className="col-sm-4 technical-skills">
						<h4>Technical Skills</h4>

						<div className="col-sm-12 icons-sect">

							<img src={reactImg} className="devicon-react-original-wordmark" alt="reactIcon" />
							<img src={typescriptImg} className="devicon-typescript-plain" alt="reactIcon" />
							<img src={javascriptImg} className="devicon-javascript-plain" alt="reactIcon" />
							<img src={html5Img} className="devicon-html5-plain-wordmark" alt="reactIcon" />
							<img src={css3Img} className="devicon-css3-plain-wordmark" alt="reactIcon" />
							<img src={bootstrapImg} className="devicon-bootstrap-plain-wordmark" alt="reactIcon" />

							<img src={javaImg} className="devicon-java-plain-wordmark" alt="reactIcon" />
							<img src={cImg} className="devicon-c-plain-wordmark" alt="reactIcon" />
							<img src={cplusplusImg} className="devicon-cplusplus-plain-wordmark" alt="reactIcon" />
							<img src={pythonImg} className="devicon-python-plain-wordmark" alt="reactIcon" />

							<img src={gitImg} className="devicon-git-plain-wordmark" alt="reactIcon" />

						</div>


						{/* <div className="col-sm-12 icons-sect">

							<i className="devicon-react-original-wordmark" />
							<i className="devicon-typescript-plain" />
							<i className="devicon-javascript-plain" />
							<i className="devicon-html5-plain-wordmark" />
							<i className="devicon-css3-plain-wordmark" />
							<i className="devicon-bootstrap-plain-wordmark" />

							<i className="devicon-java-plain-wordmark" />
							<i className="devicon-c-plain-wordmark" />
							<i className="devicon-cplusplus-plain-wordmark" />
							<i className="devicon-python-plain-wordmark" />

							<i className="devicon-git-plain-wordmark" />

						</div> */}

					</div>

					<div className="col-sm-8 profile-text">
						<p>
							I am originally from the beautiful Ho Chi Minh city in Vietnam but I earned a <strong>degree in Physics, Statistics and Chemistry</strong> from the <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">University of Toronto</a>.
						</p>
						<p>
							Afterwards, I earned a <strong>Master's degree in Bioinformatics</strong> from the <a href="https://www.uoguelph.ca" target="_blank" rel="noopener noreferrer">University of Guelph</a>, with a project in cancer genomic and proteomic statistical analyses.
							During this period, I focused on expanding my theoretical knowledge in machine learning, and my practical skill sets in Python and R.
						</p>
						<p>
							Currently, I am a third year student pursuing a second bachelor's degree in <strong>Computer Science</strong> at the <a href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer">University of British Columbia</a>.
						</p>
						<p>
							I love visualising and analysing all kinds of data <i className="fas fa-chart-pie" /> <i className="fas fa-chart-line" /> <i className="fas fa-chart-bar" /> <i className="fas fa-chart-area" />.
							I am open to working as a software/web developer.
							<br /><strong>Interested?</strong> <a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">Let me know <i className="far fa-paper-plane" /></a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;