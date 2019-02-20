import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import main from './main.jpg';
import { Button, Container, Row, Col } from 'reactstrap';
import './App.css';
import product from './product.jpg';
import icon from './icon.png';

export class Home extends Component {
	render() {
		return (
		<div className='page'>	

			<div className='main'>
				<div className='statement'>
					<h1>Captivating choice of words uniquely organized to convince your customers of your awesomeness.</h1>
					<div className='btn-holder'>
						<Button color='primary'>IMPORTANT LINK</Button>
					</div>
				</div>
			</div>
			
			<div className='description'>
				<h2>SECTION TITLE</h2>
				<p>A single sentence of some interesting text that more or less encapsulates or expands slightly upon your elevator pitch.</p>
			</div>

			<div className='capstone-feature'>
				<Container><Row>
					<Col lg='4'>
						<h2>CAPSTONE TITLE</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc aliquam magna suscipit, eu pharetra metus maximus. Nunc ac est posuere, pellentesque odio at, hendrerit justo. Donec in blandit urna. </p> 
						<p>Sed a nunc ut ex dignissim dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum suscipit sagittis. Proin in tellus lectus. Vivamus quis erat diam. Donec et ligula commodo, pretium ligula a, ornare dolor.</p>
					</Col>
					<Col lg='8' className='product-col'>
						<img className='product' src={product}/>
					</Col>
				</Row></Container>
			</div>

			<div className='features-header'>
				<h2>FEATURES</h2>
				<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
			</div>

			<div className='features'>
				<Container>
					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
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
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
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
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>
						</Row>
					</Row>
				</Container>
			</div>

			<div className='additional-product'>
				<h2>ADDITIONAL RELEVANT PRODUCT</h2>
				<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
				<div className='btn-holder'>
					<Button color='primary'>LEARN MORE</Button>
				</div>
			</div>

		</div>
	    );
  }
}