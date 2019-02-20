import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import {Home} from './Home';
import Solutions from './Solutions';
import About from './About';
import Careers from './Careers';
import Blog from './Blog';
import RequestDemo from './RequestDemo';
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
					<Route exact path='/solutions' component={Solutions}></Route>
					<Route exact path='/about' component={About}></Route>
					<Route exact path='/careers' component={Careers}></Route>
					<Route exact path='/blog' component={Blog}></Route>
					<Route exact path='/contact-us' component={RequestDemo}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
