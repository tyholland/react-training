import React, {Component} from 'react';

import GoHome from './GoHome';

class Planet extends Component {
	constructor() {
		super()

		this.state = {
			count: 0,
			planetArr: [],
			planetName: ''
		}

		this.changePlanet = this.changePlanet.bind(this)
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets')
			.then(response => response.json())
			.then(data =>
				this.setState({
					planetArr: data.results,
					planetName: data.results[this.state.count].name
				})
			)
	}

	changePlanet() {
		const counter = Math.floor(Math.random() * this.state.planetArr.length)

		this.setState({
			count: counter,
			planetName: this.state.planetArr[counter].name
		})
	}

	render() {
		const counter = this.state.count + 2
		const randomPlanet = 'https://starwars-visualguide.com/assets/img/planets/' + counter + '.jpg'

		return (
			<div className="planets jsHide">
				<GoHome projName="planets" />
				<div className="center">
					<div>
						<img src={randomPlanet} alt={this.state.planetName} width="30%" />
					</div>
					<div className="planetName">
						{this.state.planetName}
					</div>
					<button onClick={this.changePlanet}>Change Planet</button>
				</div>
			</div>
		)
	}
}

export default Planet;