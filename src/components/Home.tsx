import * as React from 'react';
import { FaEnvelopeSquare, FaFilePdfO, FaGithubSquare, FaLinkedinSquare } from 'react-icons/lib/fa';
import profileImg from '../images/mainImg.jpg';
import '../stylesheets/Home.css';
import GoogleMapContainer from './GoogleMapContainer';

class Home extends React.Component {
	public render() {
		return (
			<div className="home container">
				<div className="home-intro row">
					<div className="col-12 text-left">
						<p><strong>Hi there, I am Bang Chi Duong!</strong></p>
					</div>

					<div className="col-7 text-left">
						<p>
							I am an aspiring <strong>full-stack web developer</strong> and <strong>data scientist</strong>. 
							<br />
							Currently I am living in Vancouver Canada.
						</p>

						<GoogleMapContainer />

						<br />
						<p><strong>Connect with me on social media:</strong></p>
						<a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare className="social-icons" aria-hidden="true" /></a>
						<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="social-icons" aria-hidden="true" /></a>
						<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top"><FaEnvelopeSquare className="social-icons" aria-hidden="true" /></a>

						<br />
						<a href="https://1drv.ms/b/s!AlPEhSAAUWCmg-1M4fVovD2or56YPQ" target="_blank" rel="noopener noreferrer">
							<button className="resume-button">
								Resume <FaFilePdfO aria-hidden="true" />
							</button>
						</a>
					</div>

					<div className="col-5 text-center">
						<img src={profileImg} className="main-img" alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;