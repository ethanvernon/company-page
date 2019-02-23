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
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
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
						<Link to="/" className='padded-nav'> Home </Link>
					</NavItem>

					<NavItem className='custom-nav-padding'>
					<UncontrolledDropdown  inNavbar>
						<DropdownToggle nav className='no-padding-nav'>
							Solutions
						</DropdownToggle>
						<DropdownMenu right>
							<Link to="/bookings">
								<DropdownItem>
								Bookings
								</DropdownItem>
							</Link>
							<Link to="/logistics">
								<DropdownItem>
								Logistics
								</DropdownItem>
							</Link>
							<Link to="/favorites">
								<DropdownItem>
								Favorites
								</DropdownItem>
							</Link>
						</DropdownMenu>
					</UncontrolledDropdown>
					</NavItem>
					<NavItem>
						<Link to="/about" className='padded-nav'> About </Link>
					</NavItem>
					<NavItem>
						<Link to="/careers" className='padded-nav'> Careers </Link>
					</NavItem>
					<NavItem>
						<Link to="/contact-us" className='padded-nav'> Request Demo </Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
    );
  }
}