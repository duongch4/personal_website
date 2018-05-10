import * as React from 'react';
import './App.css';
import faDownArrow from './images/faDownArrow.svg';

// Import from ./components
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';



class App extends React.Component {
	public render() {
		return (
			<div className="App">

				<NavigationBar />
				<Welcome />

				<div className="downArrow">
					<img src={faDownArrow} alt="Scroll" width="80px" />
				</div>

			</div>
		);
	}
}

export default App;
