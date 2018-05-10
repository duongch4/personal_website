import * as React from 'react';
import { FaEnvelopeSquare, FaFilePdfO, FaGithubSquare, FaLinkedinSquare } from 'react-icons/lib/fa';
import profileImg from '../images/profileImg.jpg';

class Welcome extends React.Component {
	public render() {
		return (
			<div className="Welcome">

				<h1 className="welcomeIntro">
					<p>
						<strong>Bang Chi Duong</strong> is working on becoming a <strong>full stack web developer</strong>
					</p>
					<br />

					<a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer">
						<FaLinkedinSquare className="socialIcons" aria-hidden="true" />
					</a>
					<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer">
						<FaGithubSquare className="socialIcons" aria-hidden="true" />
					</a>
					<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top">
						<FaEnvelopeSquare className="socialIcons" aria-hidden="true" />
					</a>

					<br />
					<a href="https://1drv.ms/b/s!AlPEhSAAUWCmg-1M4fVovD2or56YPQ" target="_blank" rel="noopener noreferrer">
						<button className="resumeButton">
							Resume <FaFilePdfO aria-hidden="true" />
						</button>
					</a>
				</h1>

				<img src={profileImg} className="mainImg" />


			</div>
		);
	}
}

export default Welcome;