import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  NavbarToggler } from 'reactstrap';
import logo from './logo.svg'; 

export class Header extends Component {
	  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


	render() {
	return (
		<Navbar color='light' light expand='md'>
			<NavbarBrand href="/" className="mr-auto"><Link to="/"><img src={logo}/></Link></NavbarBrand>
			<NavbarToggler onClick={this.toggle} className='mr-2'/>
			<Collapse isOpen={this.state.isOpen} navbar>
				<Nav navbar className='ml-auto'>
					<NavItem>
						<Link to="/"> Home </Link>
					</NavItem>
					<NavItem>
						<Link to="/solutions"> Solutions </Link>
					</NavItem>
					<NavItem>
						<Link to="/about"> About </Link>
					</NavItem>
					<NavItem>
						<Link to="/careers"> Careers </Link>
					</NavItem>
					<NavItem>
						<Link to="/blog"> Blog </Link>
					</NavItem>
					<NavItem>
						<Link to="/contact-us"> Request Demo </Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
    );
  }
}