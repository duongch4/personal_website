import * as React from 'react';

import Contact from './components/Contact';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';

import faDownArrow from './images/faDownArrow.svg';

import './App.css';

// import Projects from './components/Projects';

class App extends React.Component {
	public render() {
		return (
			<div className="App">

				<NavigationBar />

				<div id="home" />
				<Home />

				<div className="downArrow">
					<img src={faDownArrow} alt="Scroll" width="80px" />
				</div>

				<h2 id="profile">PROFILE</h2>
				<Profile />

				<h2 id="contact">CONTACT</h2>
				<Contact />
			</div>
		);
	}
}

export default App;
