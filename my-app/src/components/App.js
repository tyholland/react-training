import React from 'react';

import List from './List';
import Planet from './Planet';
import ProjectChoice from './ProjectChoice';
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
			</ol>

			<List />
			<Planet />
		</div>
	)
}

export default App;