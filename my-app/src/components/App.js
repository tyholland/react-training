import React from 'react';

import List from './List';
import Planet from './Planet';
import ProjectChoice from './ProjectChoice';
import Form from './Form';
import Person from './Person';
import '../index.css';

function App() {
	return (
		<div>
			<ol className="projects">
				<li>
					<ProjectChoice name='Character List' projName='characterList' />
				</li>
				<li>
					<ProjectChoice name='Random Planets' projName='planets' />
				</li>
				<li>
					<ProjectChoice name='Flight Form' projName='form' />
				</li>
				<li>
					<ProjectChoice name='Choose a Person' projName='createPerson' />
				</li>
			</ol>

			<List />
			<Planet />
			<Form />
			<Person />
		</div>
	)
}

export default App;