import * as React from 'react';
import '../stylesheets/Footer.css';

class Footer extends React.Component {
	public render() {
		return (
			<nav className="footer navbar navbar-dark bg-dark static-bottom">
				<div className="social-icons">
					<a href="https://www.linkedin.com/in/bang-chi-duong-6857969a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin social-icons" aria-hidden="true" /></a>
					<a href="https://github.com/duongch4" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square social-icons" aria-hidden="true" /></a>
					<a href="mailto:bangchi.duong.20193@outlook.com?Subject=Hello%20there!" target="_top"><i className="fas fa-envelope-square social-icons" aria-hidden="true" /></a>
				</div>
				<div className="navbar-text">
					<h6>Bang Chi Duong @2018. All Right Reserved</h6>
				</div>
			</nav>
		);
	}
}

export default Footer;