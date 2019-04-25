import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlightInfo from './FlightInfo';
import Results from './Results';

class Form extends Component {
    state = {
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
    
    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className="form">
                <p>
                    <Link to="/">&laquo; Back to Project Examples</Link>
                </p>
                <form>
                    <FlightInfo attr={this.state} handleChange={this.handleChange} />
                </form>
                <Results attr={this.state} />
            </div>
        )
    }
}

export default Form