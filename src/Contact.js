import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'reactstrap';
import './App.css';


export class Contact extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	submit:false,
	    	nameVal:'',
	    	emailVal: '',
	    	messageVal: ''
	    };

		this.success = this.success.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
	}

	//hides form, shows success
	success() { 
		alert("Form disabled in demo");
	}

	handleName(event) {
		this.setState({nameVal: event.target.value});
	}

	handleEmail(event) {
		this.setState({emailVal: event.target.value});
	}

	handleMessage(event) {
		this.setState({messageVal: event.target.value});
	}

	render() {
		return (

		<div id="contact-container">
			<div id='contact-form'>
					
				<div class='row contact-bumpers'>
					<div class='col-sm-6'>
						<div class="form-group">
							<label class='contact-label' for="name">
								<span class="required">
									Name:
								</span>
							</label><br/>
							
							<input type="text" class="form-control" id="contact-name" name="name" value={this.state.nameVal} onChange={this.handleName} placeholder="Your Name" required="required" tabindex="1" />
						</div>	
					</div>

					<div class='col-sm-6'>
						<div class="form-group">
							<label class='contact-label' for="email">
								<span class="required">
									Email:
								</span>
							</label><br/>

							<input type="email" class="form-control" id="contact-email" name="email" value={this.state.emailVal} onChange={this.handleEmail} placeholder="Your Email" tabindex="2" required="required" />
						</div> 
					</div> 
				</div>
				
				<div class='row contact-bumpers'>			
					<div class='col-sm-12'>	
						<div class="form-group">	          
							<label class='contact-label' for="message">
								<span class="required">
									Message:
								</span>
							</label><br/>

							<textarea id="contact-message" class="form-control" name="message" value={this.state.messageVal} onChange={this.handleMessage} placeholder="Please write your message here." tabindex="5" rows='6' required="required" ></textarea>
						</div> 
					</div>
				</div>

				<div class='row no-gutters'>
					<div class='col-sm-12'>
						<div class='button-div'>
							<Button color='primary' name="submit" class='btn btn-default' type="submit" onClick={this.success} id="contact-submit">Submit</Button> 
						</div>
					</div>
				</div>

			</div>

		</div>

);
  }
}