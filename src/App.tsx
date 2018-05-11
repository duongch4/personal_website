import * as React from 'react';
import './App.css';
import faDownArrow from './images/faDownArrow.svg';

// Import from ./components
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

class App extends React.Component {
	public render() {
		return (
			<div className="App">

				<NavigationBar />

				<h2 className="heading" id="home">HOME</h2>
				<Home />

				<div className="downArrow">
					<img src={faDownArrow} alt="Scroll" width="80px" />
				</div>

				<h2 className="heading" id="profile">PROFILE</h2>
				<Profile />


			</div>
		);
	}
}

export default App;
