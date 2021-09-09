import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

// Get pages
import Index from '@pages/Index'
import Careers from '@pages/Careers'
import Becas from '@pages/Becas'
import Admisions from '@pages/Admisions'
import Contact from '@pages/Contact'

const App = props => {
	return (
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path='/' component={ Index }/>
					<Route exact path='/Oferta-Educativa' component={ Careers }/>
					<Route exact path='/Becas' component={ Becas }/>
					<Route exact path='/Admisiones' component={ Admisions }/>
					<Route exact path='/Contacto' component={ Contact }/>
				</Switch>
				<Footer/>
			</Router>
		</>
	);
};

export default App;
