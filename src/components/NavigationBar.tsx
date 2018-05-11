import * as React from 'react';

// import logo from '../images/logo.svg';

class NavigationBar extends React.Component {
	public render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<a className="navbar-brand" href="#home">BCD<span className="sr-only">(current)</span></a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
			
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-nav">
						<a className="nav-item nav-link" href="#profile">Profile</a>
						<a className="nav-item nav-link" href="#projects">Projects</a>
						<a className="nav-item nav-link" href="#contact">Contact</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavigationBar;