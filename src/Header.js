import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './logo.svg'; 

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}


	render() {
	return (
		<Navbar color='light' light expand='md'>
			<NavbarBrand href="/" className="mr-auto"><Link to="/"><img src={logo}/></Link></NavbarBrand>
			<NavbarToggler onClick={this.toggle} className='mr-2'/>
			<Collapse isOpen={this.state.isOpen} navbar>
				<Nav navbar className='ml-auto'>
					<NavItem>
						<Link to="/" className='padded-nav' onClick={this.closeNav} > Home </Link>
					</NavItem>

					<NavItem className='custom-nav-padding'>
					<UncontrolledDropdown  inNavbar>
						<DropdownToggle nav className='no-padding-nav'>
							Solutions
						</DropdownToggle>
						<DropdownMenu right>
							<Link to="/bookings"  onClick={this.closeNav} >
								<DropdownItem>
								Bookings
								</DropdownItem>
							</Link>
							<Link to="/logistics" onClick={this.closeNav} >
								<DropdownItem>
								Logistics
								</DropdownItem>
							</Link>
							<Link to="/favorites" onClick={this.closeNav} >
								<DropdownItem>
								Favorites
								</DropdownItem>
							</Link>
						</DropdownMenu>
					</UncontrolledDropdown>
					</NavItem>
					<NavItem>
						<Link to="/about" className='padded-nav' onClick={this.closeNav} > About </Link>
					</NavItem>
					<NavItem>
						<Link to="/careers" className='padded-nav' onClick={this.closeNav} > Careers </Link>
					</NavItem>
					<NavItem>
						<Link to="/contact-us" className='padded-nav' onClick={this.closeNav} > Request Demo </Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
    );
  }
}