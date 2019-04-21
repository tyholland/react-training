import React from 'react';

function Character(props) {
	const characterNum = props.count + 1
	const imgSrc = 'https://starwars-visualguide.com/assets/img/characters/' + characterNum + '.jpg'

	return (
		<div className="person">
			<div className="personImg">
				<img src={imgSrc} alt={props.name} />
			</div>
			<div className="personInfo">
				<dl>
					<dt>
						<strong>Name</strong>: {props.name}
					</dt>
					<dt>
						<strong>Height</strong>: {props.height}
					</dt>
					<dt>
						<strong>Weight</strong>: {props.weight}
					</dt>
					<dt>
						<strong>Hair Color</strong>: {props.hair_color}
					</dt>
					<dt>
						<strong>Eye Color</strong>: {props.eye_color}
					</dt>
					<dt>
						<strong>Gender</strong>: {props.gender}
					</dt>
					<dt>
						<strong>DOB</strong>: {props.birth_year}
					</dt>
				</dl>
			</div>
		</div>
	);
}

export default Character;