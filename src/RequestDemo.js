import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Footer} from './Footer';
import {Contact} from './Contact';


export class RequestDemo extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='demo'>		
			<div className='heading'>
				<h1>LOREM IPSUM</h1>
			</div>


			<div className='city-back'>
				<Contact/>
			</div>
			<Footer/>

		</div>
	    );
  }
}