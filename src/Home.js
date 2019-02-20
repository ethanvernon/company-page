import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import main from './main.jpg';
import { Button } from 'reactstrap';
import './App.css';

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
				<h2>CAPSTONE TITLE</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc aliquam magna suscipit, eu pharetra metus maximus. Nunc ac est posuere, pellentesque odio at, hendrerit justo. Donec in blandit urna. Ut porttitor congue nibh, vel eleifend justo ultrices in. Donec diam nunc, feugiat et velit quis, convallis sagittis erat.</p> 
				<p>Sed a nunc ut ex dignissim dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum suscipit sagittis. Proin in tellus lectus. Vivamus quis erat diam. Donec et ligula commodo, pretium ligula a, ornare dolor. Etiam molestie porta eros at dapibus.</p>
			</div>
		</div>
	    );
  }
}