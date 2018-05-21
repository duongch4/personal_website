import * as React from 'react';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import Projects from './components/Projects';

import './App.css';

class App extends React.Component {
	public render() {
		return (
			<div className="App">

				<NavigationBar />

				<div id="home" />
				<Home />

				<div className="downArrow">
					<i className="fas fa-angle-double-down fa-3x" />
				</div>

				<h2 id="profile">PROFILE</h2>
				<Profile />

				<h2 id="projects">PROJECTS</h2>
				<Projects />

				<h2 id="contact">CONTACT</h2>
				<Contact />

				<Footer />

			</div>


		);
	}
}

export default App;
