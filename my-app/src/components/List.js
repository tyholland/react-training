import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Character from './Character';

class List extends Component {
	state = {
		character: []
	}

	componentDidMount() {
		fetch('https://swapi.co/api/people')
			.then(response => response.json())
			.then(data =>
				this.setState({
					character: data.results
				})
			)
	}

	render() {
		const people = this.state.character.map((item, index) => {
			return <Character key={index} count={index} attr={item}  />
		})

		return (
			<div className="characterList">
				<p>
					<Link to="/">&laquo; Back to Project Examples</Link>
				</p>
				<div className="grid">
					{people}
				</div>
			</div>
		)
	}
}

export default List;