import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Planet extends Component {
	state = {
		count: 0,
		planetArr: [],
		planetName: ''
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets')
			.then(response => response.json())
			.then(data =>
				this.setState({
					planetArr: data.results.map((item) => { return item.name }),
					planetName: data.results[this.state.count].name
				})
			)
	}

	changePlanet = () => {
		const counter = Math.floor(Math.random() * this.state.planetArr.length)

		this.setState({
			count: counter,
			planetName: this.state.planetArr[counter]
		})
	}

	render() {
		const counter = this.state.count + 2
		const randomPlanet = 'https://starwars-visualguide.com/assets/img/planets/' + counter + '.jpg'

		return (
			<div className="planets">
				<p>
					<Link to="/">&laquo; Back to Project Examples</Link>
				</p>
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