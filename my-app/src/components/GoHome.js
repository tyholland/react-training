import React from 'react';

function GoHome(props) {
	const projName = '.' + props.projName

	function returnBack() {
		document.querySelector(projName).classList.add('jsHide');
		document.querySelector('.projects').classList.remove('jsHide');
	}

	return (
		<div>
			<div className="backBtn">
				<a href="/#/" onClick={returnBack}>&laquo; Back to Project Examples</a>
			</div>
		</div>
	);
}

export default GoHome;