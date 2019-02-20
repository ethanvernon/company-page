import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import office from './work.jpg';
import { Button, Container, Row, Col } from 'reactstrap';
import './App.css';
import product from './product.jpg';
import icon from './icon.png';
import book from './book.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';


export class About extends Component {
	render() {
		return (
		<div className='page'>	

			<div className='about' id='about'>
				<div className='statement'>
					<h1>ABOUT</h1>
				</div>
			</div>

			<div className='one-line'>
				<p>Cras sit amet metus vel lorem hendrerit dictum. Praesent condimentum magna in tempor dapibus. Praesent lobortis suscipit nisi vitae cursus.</p>
			</div>

		</div>
	    );
  }
}