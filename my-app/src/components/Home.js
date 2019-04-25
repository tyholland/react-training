import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
	<div>
		<ol className="projects">
			<li>
				<Link to="characterList">Character List</Link>
			</li>
			<li>
				<Link to="randomPlanets">Random Planets</Link>
			</li>
			<li>
				<Link to="flightForm">Flight Form</Link>
			</li>
			<li>
				<Link to="choosePerson">Choose a Person</Link>
			</li>
		</ol>
	</div>
)

export default Home;