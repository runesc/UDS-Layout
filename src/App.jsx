import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '@components/Navbar';

// Get pages
import Index from '@pages/Index'

const App = props => {
	return (
		<>
			<Navbar/>

			<Router>
				<Switch>
					<Route exact path='/' component={ Index }/>
				</Switch>
			</Router>
		</>
	);
};

export default App;
