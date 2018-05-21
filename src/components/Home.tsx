import * as React from 'react';
import homeImg from '../images/homeImg.jpg';
import '../stylesheets/Home.css';
import GoogleMapContainer from './GoogleMapContainer';

class Home extends React.Component {
	public render() {
		return (
			<div className="home container">
				<div className="row">

					<div className="col-sm-6 text-center">
						<h4><strong>HI, I'M BANG CHI DUONG!</strong></h4>
						<p>
							I am an aspiring <strong>full-stack web developer</strong> and <strong>data scientist</strong>.
							Currently I am living in Vancouver Canada.
						</p>

						<div className="col-sm-12"><GoogleMapContainer /></div>

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

					<div className="col-sm-6 img-sect"><img src={homeImg} className="home-img img-fluid d-none d-sm-block" alt="HomeImage" /></div>

				</div>
			</div>
		);
	}
}

export default Home;

// <img src={profileImg} className="main-img col-sm-5 img-fluid rounded-circle d-none d-sm-block" alt="HomeImage" />