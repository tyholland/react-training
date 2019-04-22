import React from 'react';

import List from './List';
import Planet from './Planet';
import ProjectChoice from './ProjectChoice';
import Form from './Form';
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
			</ol>

			<List />
			<Planet />
			<Form />
		</div>
	)
}

export default App;