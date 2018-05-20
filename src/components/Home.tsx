import * as React from 'react';
import homeImg from '../images/homeImg.jpg';
import '../stylesheets/Home.css';
import GoogleMapContainer from './GoogleMapContainer';

class Home extends React.Component {
	public render() {
		return (
			<div className="container home">
				<div className="row">
					<div className="col-sm-12 home-intro text-left">
						<h4><strong>Hi there, I am Bang Chi Duong!</strong></h4>
					</div>

					<div className="col-sm-6 text-left">
						<p>
							I am an aspiring <strong>full-stack web developer</strong> and <strong>data scientist</strong>. 
							<br />
							Currently I am living in Vancouver Canada.
						</p>

						<GoogleMapContainer />

						<br />
						<p><strong>Connect with me on social media:</strong></p>
						<a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin social-icons" aria-hidden="true" /></a>
						<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square social-icons" aria-hidden="true" /></a>
						<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top"><i className="fas fa-envelope-square social-icons" aria-hidden="true" /></a>

						<br />
						<a href="https://1drv.ms/b/s!AlPEhSAAUWCmg-1M4fVovD2or56YPQ" target="_blank" rel="noopener noreferrer">
							<button className="resume-button">
								Resume <i className="far fa-file-pdf pdf-icon" aria-hidden="true" />
							</button>
						</a>
					</div>

					<div><img src={homeImg} className="home-img col-sm-6 img-fluid" alt="HomeImage" /></div>
					
				</div>
			</div>
		);
	}
}

export default Home;

// <img src={profileImg} className="main-img col-sm-5 img-fluid rounded-circle d-none d-sm-block" alt="HomeImage" />