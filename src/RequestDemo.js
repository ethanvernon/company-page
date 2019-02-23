import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import office from './work.jpg';
import { Button, Col, Container, Row } from 'reactstrap';
import './App.css';
import product from './product-transparent.png';
import headshot from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';
import {Contact} from './Contact';
import { Link } from 'react-router-dom';
import icon from './icon.png';


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