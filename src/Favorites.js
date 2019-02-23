import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import product from './product-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';
import {Contact} from './Contact';
import icon from './icon.png';


export class Favorites extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='favorites'>		
			<div className='heading'>
				<h1>LOREM IPSUM</h1>
				<p className='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>

			<div className='key-solution'>
				<Container>
					<Row>
						<Col sm='12' md='6' className='description-col'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis malesuada massa. Nullam iaculis ullamcorper ante. Quisque interdum turpis ac magna convallis, sed sollicitudin orci condimentum. Morbi aliquet vehicula lectus. Quisque non interdum sapien, sed convallis tellus.</p>
						</Col>
						<Col sm='12' md='6' className='img-col'>
							<img src={product}/>
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
								<h3>Tellus Efficitur</h3>
								<p>Pellentesque eleifend arcu nisi, feugiat efficitur ligula pharetra non. Morbi nunc neque, lacinia quis. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
								<h3>Vitae Dapibus</h3>
								<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vehicula erat quis enim porta semper. </p>
							</Col>
							<Col md='4' className='perk-card'>
								<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
								<h3>Mauris Hendrerit</h3>
								<p>Proin semper dui at mi ultricies consequat. Donec sit amet varius augue. In fermentum cursus tristique.</p>
							</Col>				
						</Row>
					</Container>
			</div>

			<div className='features'>

				<h2>FEATURES</h2>
				<Container>
					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>
						</Row>
					</Row>
					
					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>
						</Row>
					</Row>

					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis.</p>
							</div>
						</Col>
						</Row>
					</Row>
				</Container>
			</div>


			<Contact/>
			<Footer/>

		</div>
	    );
  }
}