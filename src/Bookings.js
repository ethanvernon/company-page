import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'reactstrap';
import './App.css';
import product from './product-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Footer} from './Footer';
import icon from './icon.png';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import book from './book.jpg';


export class Bookings extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='bookings'>	
			<div className='heading'>
				<h1>LOREM IPSUM</h1>
				<p className='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere sagittis augue ac rhoncus. Nunc vulputate lobortis lectus, rutrum porttitor justo consequat at.</p>
			</div>

			<div className='key-solution'>
				<Container>
					<Row>
						<Col sm='12' md='4' className='description-col'>
							<h2>INTEGER EU</h2>
							<p>Quisque mi odio, consectetur commodo scelerisque eget, aliquet a augue. Aenean vestibulum nisi a imperdiet vulputate.</p>
							<p>Fusce euismod lacus vel urna dapibus, a laoreet tortor placerat. Sed gravida neque tellus, ac sagittis arcu aliquam ut. </p>
						</Col>
						<Col sm='12' md='8' className='img-col'>
							<img src={product}/>
						</Col>
					</Row>
				</Container>
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

			<div className='left-feature'>
				<h2>CONVALLIS LACUS</h2>
				<Container>
					<Row>
						<Col md='7' className='book-col'>
							<img src={book}/><br/>
							<Button color='primary'>DOWNLOAD</Button>
						</Col>
						<Col md='5' className='book-desc'>
							<h3>DONEC CURSUS CURSUS</h3>
							<p>Pellentesque convallis, magna eu auctor vestibulum, neque ligula dapibus mi, a facilisis felis lectus id risus. Sed sollicitudin ac sapien blandit condimentum.</p>
							<h3>NUNC QUIS</h3>
							<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quis magna sit amet lacus tempus tempor. Pellentesque nec nibh ac urna aliquet vestibulum.</p>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='ending'>
				<Container><Row>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>39%</h2>
							<h3>Increase in sales</h3>
						</div>
					</Col>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>99%</h2>
							<h3>Customer Satisfaction</h3>
						</div>
					</Col>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>385000</h2>
							<h3>Bookings</h3>
						</div>
					</Col>
				</Row></Container>
			</div>

			<Footer/>

		</div>
	    );
  }
}