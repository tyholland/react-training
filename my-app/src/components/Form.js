import React, {Component} from "react"

import FlightInfo from "./FlightInfo"
import Results from "./Results"
import GoHome from "./GoHome"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            toothbrush: false,
            comb: false,
            belt: false,
            soap: false,
            location: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
        
    }
    
    render() {
        return (
            <div className="form jsHide">
                <GoHome projName="form" />
                <form>
                    <FlightInfo firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age} gender={this.state.gender} location={this.state.location} handleChange={this.handleChange} />
                </form>
                <Results firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age} gender={this.state.gender} location={this.state.location} toothbrush={this.state.toothbrush} comb={this.state.comb} belt={this.state.belt} soap={this.state.soap} />
            </div>
        )
    }
}

export default Form