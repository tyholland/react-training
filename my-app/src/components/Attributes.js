import React from "react"

function Attributes(props) {
	const options = props.attr.map(function(item, index) {
		return <option key={index} value={item}>{item}</option>
	})

	return (
		<p>
			<select name={props.name} value={props.val} onChange={props.change}>
				<option value="">{props.default}</option>
				{options}
			</select>
		</p>
	)
}

export default Attributes