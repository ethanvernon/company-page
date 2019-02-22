import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import office from './work.jpg';
import { Button, Col } from 'reactstrap';
import './App.css';
import headshot from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';
import { Link } from 'react-router-dom';


export class Logistics extends Component {
	render() {
		return (
		<div className='logistics'>	
			<div className='frame-frame'>
			<div className='frame-div'>
				<iframe 
					src="https://www.youtube.com/embed/YgmIibSnZs0" 
					frameborder="0" 
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen/>
			</div>
			</div>
		</div>
	    );
  }
}