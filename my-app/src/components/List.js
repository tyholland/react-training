import React, {Component} from 'react';

import GoHome from './GoHome';
import Character from './Character';

class List extends Component {
	constructor() {
		super()

		this.state = {
			character: []
		}
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
		const people = this.state.character.map(function(item, index) {
			return <Character key={index} count={index} name={item.name} height={item.height} weight={item.mass} hair_color={item.hair_color} eye_color={item.eye_color} gender={item.gender} birth_year={item.birth_year} />
		})

		return (
			<div className="characterList jsHide">
				<GoHome projName="characterList" />
				<div className="grid">
					{people}
				</div>
			</div>
		)
	}
}

export default List;