import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import display from './display.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';
import { Link } from 'react-router-dom';


export class Logistics extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='logistics'>	

			<div className='heading'>
				<h1>LOREM IPSUM</h1>
			</div>

			<div className='key-solution'>
				<Container>
					<Row>
						<Col sm='12' md='6' className='description-col'>
							<p>Quisque mi odio, consectetur commodo scelerisque eget, aliquet a augue. Aenean vestibulum nisi a imperdiet vulputate. Fusce euismod lacus vel urna dapibus, a laoreet tortor placerat. Sed gravida neque tellus, ac sagittis arcu aliquam ut. </p>
						</Col>
						<Col sm='12' md='6' className='img-col'>
							<img src={display}/>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='perks'>
				<h2>ALIQUETS</h2>
					<Container className='perk-cards-container'>
						<Row>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
								<h3>Perk Name</h3>
								<p>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
								<h3>Perk Name</h3>
								<p>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
								<h3>Perk Name</h3>
								<p>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis nisl a, volutpat volutpat enim. Morbi est lectus, luctus sit amet metus ac, porttitor tristique dui. Phasellus rhoncus odio non erat rutrum efficitur porta nec ipsum. </p>
							</Col>				
						</Row>
					</Container>
			</div>

			<div className='frame-frame'>
				<div className='frame-div'>
					<iframe 
						src="https://www.youtube.com/embed/YgmIibSnZs0" 
						frameborder="0" 
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen/>
				</div>
			</div>

			<div className='ending'>
				<h2>CURABITUR VENANTS</h2>
				<Container><Row>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>39%</h2>
							<h3>Interdum et malesu</h3>
						</div>
					</Col>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>99%</h2>
							<h3>Ante ipsum primis</h3>
						</div>
					</Col>
					<Col md='4' lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>385</h2>
							<h3>Morbi quis magna</h3>
						</div>
					</Col>
				</Row></Container>
			</div>

			<Footer/>

		</div>
	    );
  }
}