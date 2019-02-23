import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Container } from 'reactstrap';
import './App.css';
import team from './team1.jpg';
import team2 from './team2.jpg';
import pano from './pano.jpg';
import city from './city.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';


export class Careers extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
		<div className='careers-page'>	

			<div className='title'>
				<h1>CAREERS</h1>
				<p>Etiam cursus, tortor eget porttitor faucibus, turpis metus faucibus est, quis suscipit odio libero et dolor. </p>
			</div>

			<div className='call-to-action'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis porttitor finibus. Nulla hendrerit ornare purus, a iaculis elit lacinia vel. Cras dignissim vitae velit in facilisis. Etiam cursus, tortor eget porttitor faucibus, turpis metus faucibus est, quis suscipit odio libero et dolor.</p>
				<p>Quisque quis orci ac ipsum pellentesque imperdiet massa?</p>
				<Button color='primary'>APPLY NOW</Button>
			</div>

			<img className='perks-img' src={pano}/>

			<div className='perks'>
				<h2>Perks and Benefits</h2>

				<Container className='perk-cards-container'>

				<Row>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				</Row>

				<Row>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				</Row>

				<Row>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				<Col md='6' className='perk-card'>
				<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-1'/>
				<p>Perk Name<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Col>
				</Row>

				</Container>
			</div>

			<div className='culture'>
				<h2>Culture at Company</h2>

				<Container>
					<Row>
						<Col md='6' className='culture-point'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci ac ipsum pellentesque imperdiet vitae quis massa. Ut convallis sollicitudin tempor. Sed sed eros at orci porta viverra nec quis enim. Ut tempor blandit pellentesque. Nulla sit amet ex efficitur, posuere ante vel, tristique massa. Pellentesque quis pretium nulla.</p>
						</Col>
						<Col md='6'>
							<img src={team}/>
						</Col>
					</Row>
					<Row>
						<Col md='6' className='culture-point'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci ac ipsum pellentesque imperdiet vitae quis massa. Ut convallis sollicitudin tempor. Sed sed eros at orci porta viverra nec quis enim. Ut tempor blandit pellentesque. Nulla sit amet ex efficitur, posuere ante vel, tristique massa. Pellentesque quis pretium nulla.</p>
						</Col>
						<Col md='6'>
							<img src={team2}/>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='apply-link'>
				<h2>Begin your journey with us</h2>
				<Button color='primary'>APPLY NOW</Button>
			</div>

			<div className='locations'>
				<h2>Office locations</h2>
				<Container>
					<Row>
						<Col xs='4'>
							<img src={city}/>
						</Col>
						<Col xs='4'>
							<img src={city}/>
						</Col>
						<Col xs='4'>
							<img src={city}/>
						</Col>
					</Row>

					<Row>
						<Col xs='4'>
							<img src={city}/>
						</Col>
						<Col xs='4'>
							<img src={city}/>
						</Col>
						<Col xs='4'>
							<img src={city}/>
						</Col>
					</Row>
				</Container>

			</div>

			<Footer/>

		</div>
	    );
  }
}