import * as React from 'react';

// import logo from '../images/logo.svg';

class NavigationBar extends React.Component {
	public render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#home">BCD</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-nav mr-auto">
						<a className="nav-item nav-link active" href="#home">Home<span className="sr-only">(current)</span></a>
						<a className="nav-item nav-link" href="#profile">Profile</a>
						<a className="nav-item nav-link" href="#projects">Projects</a>
						<a className="nav-item nav-link" href="#contact">Contact</a>
					</div>

					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
		);
	}
}

export default NavigationBar;