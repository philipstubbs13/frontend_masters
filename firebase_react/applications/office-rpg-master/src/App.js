import React, { Component } from 'react';
import { database } from './firebase';
import Characters from './Characters';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: null
		};
	}

	// orderByKey (default)
	// orderByChild
	// orderByValue
	// orderByPriority
	// startAt, endAt, limit
	componentWillMount() {
		database.ref('characters').orderByKey().on('value', (snapshot) => {
			this.setState({
				characters: snapshot.val()
			});
		});
	}


	render() {
		const { characters } = this.state;

		return (
			<div className="App">
				<div className="App--header">
					<h2>Office RPG</h2>
				</div>
				<section className="Characters">
					{characters && <Characters characters={characters} />}
				</section>
			</div>
		);
	}
}

export default App;
