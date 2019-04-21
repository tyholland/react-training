import React from 'react';

function ProjectChoice(props) {
	const projName = '.' + props.projName

	function goToProject() {
		document.querySelector(projName).classList.remove('jsHide');
		document.querySelector('.projects').classList.add('jsHide');
	}

	return (
		<div>
			<a href="/#/" onClick={goToProject}>{props.name}</a>
		</div>
	);
}

export default ProjectChoice;