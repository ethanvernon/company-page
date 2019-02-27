import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'reactstrap';
import './App.css';
import headshot from './profile.svg';
import {Footer} from './Footer';
import { Link } from 'react-router-dom';


export class About extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

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

			<div className='team'>
				<h2>Our Team</h2>
				<div className='description'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis porttitor finibus. Nulla hendrerit ornare purus, a iaculis elit lacinia vel. Cras dignissim vitae velit in facilisis.</p>
				</div>

				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Lorem ipsum</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Doler Sit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Amet Consecetur</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Adipiscing Elit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Dibec Et</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Purus Neque</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Sodales Laoreet</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Vestibu Pellentes</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Edet Malesua</p>
				</Col>
				
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Doler Sit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Amet Consecetur</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Adipiscing Elit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Dibec Et</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Purus Neque</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Sodales Laoreet</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Vestibu Pellentes</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Edet Malesua</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Doler Sit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Amet Consecetur</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Adipiscing Elit</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Dibec Et</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Purus Neque</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Sodales Laoreet</p>
				</Col>
				<Col>
					<img src={headshot}/>
					<p className='headshot-name'>Vestibu Pellentes</p>
				</Col>
			</div>

			<div className='hire-plug'>
				<p>We're looking for smart and passionate people to join our team.</p>
				<Link to="/careers"><Button color='primary'>OPEN POSITIONS</Button></Link>
			</div>

			<Footer/>

		</div>
	    );
  }
}