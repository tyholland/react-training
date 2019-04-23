import React, {Component} from "react"

import Attributes from "./Attributes"
import GoHome from "./GoHome"
import {createAttributes, characterInfo, filterAttributes, getCharacterPic} from "./functions"

class Person extends Component {
	constructor() {
		super()

		this.state = {
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

		this.handleChange = this.handleChange.bind(this)
		this.setCharacterInfo = this.setCharacterInfo.bind(this)
		this.resetAttributes = this.resetAttributes.bind(this)
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

	handleChange(event) {
		const {name, value} = event.target
		const character = this.state.character
		
		value ? character[name] = value : delete character[name]
		this.setState({ [name]: value })

		this.setCharacterInfo(filterAttributes(character, this.state.starWars))
	}

	setCharacterInfo(arr) {
		if (arr.length === 1) {
			const characterName = arr[0].name

			this.setState(characterInfo(false, characterName, getCharacterPic(characterName, this.state.starWars), arr))
		} else {
			this.setState(characterInfo(true, '', '', arr))
		}
	}

	resetAttributes() {
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
		const showImg = this.state.loading ? '' : <img src={this.state.personImg} alt={this.state.personName} width='60%' />
		const showName = this.state.loading ? 'Choose from the attributes to display a character' : this.state.personName
		const height = createAttributes(this.state.updatedArr, 'height')
		const mass = createAttributes(this.state.updatedArr, 'mass')
		const gender = createAttributes(this.state.updatedArr, 'gender')
		const birth_year = createAttributes(this.state.updatedArr, 'birth_year')
		const hair_color = createAttributes(this.state.updatedArr, 'hair_color')
		const eye_color = createAttributes(this.state.updatedArr, 'eye_color')

		return (
			<div className="createPerson jsHide">
				<GoHome projName="createPerson" />
				<div className="grid">
					<div className="personAttr">
						<Attributes name="gender" default="Select a Gender" attr={gender} val={this.state.gender} change={this.handleChange} />
						<Attributes name="birth_year" default="Select a D.O.B" attr={birth_year} val={this.state.birth_year} change={this.handleChange} />
						<Attributes name="height" default="Select a Height" attr={height} val={this.state.height} change={this.handleChange} />
						<Attributes name="mass" default="Select a Weight" attr={mass} val={this.state.mass} change={this.handleChange} />
						<Attributes name="hair_color" default="Select a Hair Color" attr={hair_color} val={this.state.hair_color} change={this.handleChange} />
						<Attributes name="eye_color" default="Select a Eye Color" attr={eye_color} val={this.state.eye_color} change={this.handleChange} />
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