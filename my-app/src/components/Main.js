import React from 'react';
import {Route} from 'react-router-dom';
import List from './List';
import Person from './Person';
import Form from './Form';
import Planet from './Planet';
import Home from './Home';

const Main = () => (
	<div>
		<Route exact path="/" component={Home} />
		<Route path="/characterList" component={List} />
		<Route path="/choosePerson" component={Person} />
		<Route path="/flightForm" component={Form} />
		<Route path="/randomPlanets" component={Planet} />
	</div>
)

export default Main;