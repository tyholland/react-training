import React from 'react';

const FlightInfo = (props) => (
    <div>
        <div className="block">
            <input name="firstName" value={props.attr.firstName} onChange={props.handleChange} placeholder="First Name" />
        </div>
        <div className="block">
            <input name="lastName" value={props.attr.lastName} onChange={props.handleChange} placeholder="Last Name" />
        </div>
        <div className="block">
            <input name="age" value={props.attr.age} onChange={props.handleChange} placeholder="Age" maxLength="2" />
        </div>
        <div className="block">
            <div>
                Select your gender?
            </div>
            <label>
                <input type="radio" name="gender" value="male" checked={props.attr.gender === "male"} onChange={props.handleChange} /> <span>Male</span>
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="female" checked={props.attr.gender === "female"} onChange={props.handleChange} /> <span>Female</span>
            </label>
        </div>
        <div className="block">
            <select name="location" value={props.attr.location} onChange={props.handleChange}>
                <option value="">Select your destination?</option>
                <option value="boston">Boston</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="florida">Florida</option>
            </select>
        </div>
        <div className="block">
            <div>
                Select the items you're bringing with you?
            </div>
            <label>
                <input type="checkbox" name="toothbrush" checked={props.attr.toothbrush} onChange={props.handleChange} /> <span>Toothbrush</span>
            </label>
            <br />
            <label>
                <input type="checkbox" name="soap" checked={props.attr.soap} onChange={props.handleChange} /> <span>Soap</span>
            </label>
            <br />
            <label>
                <input type="checkbox" name="comb" checked={props.attr.comb} onChange={props.handleChange} /> <span>Comb</span>
            </label>
            <br />
            <label>
                <input type="checkbox" name="belt" checked={props.attr.belt} onChange={props.handleChange} /> <span>Belt</span>
            </label>
        </div>
    </div>
)

export default FlightInfo