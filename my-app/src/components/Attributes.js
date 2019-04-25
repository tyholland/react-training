import React from 'react';

const Attributes = (props) => {
	const options = props.attr.type.map((item, index) => {
		return <option key={index} value={item}>{item}</option>
	})

	return (
		<p>
			<select name={props.attr.name} value={props.val} onChange={props.change}>
				<option value="">{props.attr.default}</option>
				{options}
			</select>
		</p>
	)
}

export default Attributes