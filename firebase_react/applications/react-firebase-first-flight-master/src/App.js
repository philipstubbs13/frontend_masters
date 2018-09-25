import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		database.ref('/').on('value', () => {
			console.log('THE DATA CHANGED!');
		});
	}

	render() {
		return (
			<div className="App">
				<div className="App--header">
					<h2>Welcome to React and Firebase</h2>
				</div>
				<pre className="App--data">
					One day, some data from Firebase will go here.
        </pre>
			</div>
		);
	}
}

export default App;
