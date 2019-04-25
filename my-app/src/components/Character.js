import React from 'react';

const Character = (props) => {
	const characterNum = props.count + 1
	const imgSrc = 'https://starwars-visualguide.com/assets/img/characters/' + characterNum + '.jpg'

	return (
		<div className="person">
			<div className="personImg">
				<img src={imgSrc} alt={props.attr.name} />
			</div>
			<div className="personInfo">
				<dl>
					<dt>
						<strong>Name</strong>: {props.attr.name}
					</dt>
					<dt>
						<strong>Height</strong>: {props.attr.height}
					</dt>
					<dt>
						<strong>Weight</strong>: {props.attr.mass}
					</dt>
					<dt>
						<strong>Hair Color</strong>: {props.attr.hair_color}
					</dt>
					<dt>
						<strong>Eye Color</strong>: {props.attr.eye_color}
					</dt>
					<dt>
						<strong>Gender</strong>: {props.attr.gender}
					</dt>
					<dt>
						<strong>DOB</strong>: {props.attr.birth_year}
					</dt>
				</dl>
			</div>
		</div>
	);
}

export default Character;