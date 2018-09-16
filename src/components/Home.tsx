import * as React from 'react';
import homeImg from '../images/homeImg.jpg';
import '../stylesheets/Home.css';
// import GoogleMapContainer from './GoogleMapContainer';

class Home extends React.Component {
	public render() {
		return (
			<div id="home" className="container-fluid">
				<div className="row">

					<div className="col-md-4 img-sect d-none d-md-block"><img src={homeImg} className="home-img img-fluid" alt="HomeImage" /></div>

					<div className="col-md-8 text-center">
						<h1>Hi, I'm Bang Chi Duong!</h1>
						<hr />
						<p>
							I'm an aspiring <strong>full-stack web developer</strong> and <strong>data scientist</strong> based in Vancouver.
						</p>

						{/* <div className="col-sm-12"><GoogleMapContainer /></div> */}

						<h6>Connect with me</h6>

						<div className="social-icons-sect">
						<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square social-icons" aria-hidden="true" /></a>
						<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top"><i className="fas fa-envelope-square social-icons" aria-hidden="true" /></a>
						<a href="https://www.linkedin.com/in/bang-chi-duong/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin social-icons" aria-hidden="true" /></a>
						</div>

						<div>
						<a href="https://1drv.ms/b/s!AlPEhSAAUWCmhd5wSLA_HvivQNhaxw" target="_blank" rel="noopener noreferrer">
							<button className="resume-button">
								Resume <i className="far fa-file-pdf pdf-icon" aria-hidden="true" />
							</button>
						</a>
						</div>
					</div>



				</div>
			</div>
		);
	}
}

export default Home;

// <img src={profileImg} className="main-img col-sm-5 img-fluid rounded-circle d-none d-sm-block" alt="HomeImage" />