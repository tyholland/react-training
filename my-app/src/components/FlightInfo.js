import React from "react"

function FlightInfo(props) {
    return (
        <div>
            <div className="block">
                <input name="firstName" value={props.firstName} onChange={props.handleChange} placeholder="First Name" />
            </div>
            <div className="block">
                <input name="lastName" value={props.lastName} onChange={props.handleChange} placeholder="Last Name" />
            </div>
            <div className="block">
                <input name="age" value={props.age} onChange={props.handleChange} placeholder="Age" maxLength="2" />
            </div>
            <div className="block">
                <div>
                    Select your gender?
                </div>
                <label>
                    <input type="radio" name="gender" value="male" checked={props.gender === "male"} onChange={props.handleChange} /> <span>Male</span>
                </label>
                <br />
                <label>
                    <input type="radio" name="gender" value="female" checked={props.gender === "female"} onChange={props.handleChange} /> <span>Female</span>
                </label>
            </div>
            <div className="block">
                <select name="location" value={props.location} onChange={props.handleChange}>
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
                    <input type="checkbox" name="toothbrush" checked={props.toothbrush} onChange={props.handleChange} /> <span>Toothbrush</span>
                </label>
                <br />
                <label>
                    <input type="checkbox" name="soap" checked={props.soap} onChange={props.handleChange} /> <span>Soap</span>
                </label>
                <br />
                <label>
                    <input type="checkbox" name="comb" checked={props.comb} onChange={props.handleChange} /> <span>Comb</span>
                </label>
                <br />
                <label>
                    <input type="checkbox" name="belt" checked={props.belt} onChange={props.handleChange} /> <span>Belt</span>
                </label>
            </div>
        </div>
    )
}

export default FlightInfo