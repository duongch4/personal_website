import * as React from 'react';

import logo from '../images/logo.svg';

class NavigationBar extends React.Component {
	public render() {
		return (
			<div className="NavigationBar">

				<div className="navItem navName">
					BCD <img src={logo} className="navLogo" alt="logo" />
				</div>

				<div className="navItem">
					<a href="#footer" className="navLink"> Contact </a>
				</div>

				<div className="navItem">
					<a href="#projects" className="navLink"> Projects </a>
				</div>

				<div className="navItem">
					<a href="#profile" className="navLink"> Profile </a>
				</div>

			</div>
		);
	}
}

export default NavigationBar;