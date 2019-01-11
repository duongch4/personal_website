import * as React from "react";

import * as bootstrapImg from "../assets/svg/devicon-bootstrap.svg";
import * as cImg from "../assets/svg/devicon-c.svg";
import * as cplusplusImg from "../assets/svg/devicon-cpp.svg";
import * as css3Img from "../assets/svg/devicon-css.svg";
import * as gitImg from "../assets/svg/devicon-git.svg";
import * as html5Img from "../assets/svg/devicon-html.svg";
import * as javaImg from "../assets/svg/devicon-java.svg";
import * as javascriptImg from "../assets/svg/devicon-js.svg";
import * as pythonImg from "../assets/svg/devicon-python.svg";
import * as reactImg from "../assets/svg/devicon-react.svg";
import * as typescriptImg from "../assets/svg/devicon-ts.svg";
import * as webpackImg from "../assets/svg/devicon-webpack.svg";

export class Profile extends React.Component<any, any> {
	public render() {
		return (
			<div id="profile" className="container-fluid">
				<div className="row header"><h2>Profile</h2></div>
				<div className="row">
					<div className="col-sm-4 technical-skills">
						<h4>Technical Skills</h4>
						<div className="col-sm-12 icons-sect">
							{/* <i className="devicon-python-plain-wordmark colored" />
							<i className="devicon-cplusplus-plain-wordmark colored" />
							<i className="devicon-java-plain-wordmark colored" />
							<i className="devicon-c-plain-wordmark colored" />

							<i className="devicon-react-original-wordmark colored" />
							<i className="devicon-webpack-plain colored" />
							<i className="devicon-html5-plain-wordmark colored" />
							<i className="devicon-css3-plain-wordmark colored" />
							<i className="devicon-javascript-plain colored" />
							<i className="devicon-typescript-plain colored" />
							<i className="devicon-bootstrap-plain-wordmark colored" />

							<i className="devicon-git-plain-wordmark colored" /> */}

							<img src={pythonImg} className="devicon-python-plain-wordmark" alt="reactIcon" />
							<img src={cplusplusImg} className="devicon-cplusplus-plain-wordmark" alt="reactIcon" />
							<img src={javaImg} className="devicon-java-plain-wordmark" alt="reactIcon" />
							<img src={cImg} className="devicon-c-plain-wordmark" alt="reactIcon" />

							<img src={webpackImg} className="devicon-react-original-wordmark" alt="reactIcon" />
							<img src={reactImg} className="devicon-react-original-wordmark" alt="reactIcon" />
							<img src={html5Img} className="devicon-html5-plain-wordmark" alt="reactIcon" />
							<img src={css3Img} className="devicon-css3-plain-wordmark" alt="reactIcon" />
							<img src={javascriptImg} className="devicon-javascript-plain" alt="reactIcon" />
							<img src={typescriptImg} className="devicon-typescript-plain" alt="reactIcon" />
							<img src={bootstrapImg} className="devicon-bootstrap-plain-wordmark" alt="reactIcon" />

							<img src={gitImg} className="devicon-git-plain-wordmark" alt="reactIcon" />
						</div>
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