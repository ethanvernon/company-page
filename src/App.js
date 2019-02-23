import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import {Home} from './Home';
import {Bookings} from './Bookings';
import {Favorites} from './Favorites';
import {Logistics} from './Logistics';
import {About} from './About';
import {Careers} from './Careers';
import {RequestDemo} from './RequestDemo';
import {Header} from './Header';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<Header/>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/bookings' component={Bookings}></Route>
					<Route exact path='/favorites' component={Favorites}></Route>
					<Route exact path='/logistics' component={Logistics}></Route>
					<Route exact path='/about' component={About}></Route>
					<Route exact path='/careers' component={Careers}></Route>
					<Route exact path='/contact-us' component={RequestDemo}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
