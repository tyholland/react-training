import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Attributes from './Attributes';
import {characterInfo, filterAttributes, getCharacterPic, getAttributeData} from './Person/functions';

class Person extends Component {
	state = {
		character: {},
		starWars: [],
		updatedArr: [],
		height: '',
		mass: '',
		gender: '',
		birth_year: '',
		hair_color: '',
		eye_color: '',
		loading: true,
		personName: '',
		personImg: ''
	}

	componentDidMount() {
		fetch('https://swapi.co/api/people')
			.then(response => response.json())
			.then(data => {
				this.setState({
					starWars: data.results,
					updatedArr: data.results
				})
			})
	}

	handleChange = (event) => {
		const {name, value} = event.target
		const character = this.state.character
		
		value ? character[name] = value : delete character[name]
		this.setState({ [name]: value })

		this.setCharacterInfo(filterAttributes(character, this.state.starWars))
	}

	setCharacterInfo = (arr) => {
		if (arr.length === 1) {
			const characterName = arr[0].name

			this.setState(characterInfo(false, characterName, getCharacterPic(characterName, this.state.starWars), arr))
		} else {
			this.setState(characterInfo(true, '', '', arr))
		}
	}

	resetAttributes = () => {
		this.setState({
			loading: true,
			personName: '',
			personImg: '',
			height: '',
			mass: '',
			gender: '',
			birth_year: '',
			hair_color: '',
			eye_color: '',
			updatedArr: this.state.starWars,
			character: {}
		})
	}

	render() {
		const showImg = this.state.loading ? 'Choose from the list of attributes' : <img src={this.state.personImg} alt={this.state.personName} width='60%' />
		const showName = this.state.loading ? 'To display a hidden character' : this.state.personName
		const attributeData = getAttributeData(this.state.updatedArr)
		const personAttributes = attributeData.map((item, index) => {
			const nameAttr = item.name

			return <Attributes key={index} attr={item} val={this.state[nameAttr]} change={this.handleChange} />
		})

		return (
			<div className="createPerson">
				<p>
					<Link to="/">&laquo; Back to Project Examples</Link>
				</p>
				<div className="grid">
					<div className="personAttr">
						{personAttributes}
						<div>
							<button onClick={this.resetAttributes}>Reset</button>
						</div>
					</div>
					<div className="center">
						{showImg}
						<div>
							{showName}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Person