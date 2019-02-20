import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

function Header (){
  return (
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/solutions"> Solutions </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/careers"> Careers </Link>
            </li>
            <li>
              <Link to="/blog"> Blog </Link>
            </li>
            <li>
              <Link to="/contact-us"> Request Demo </Link>
            </li>
          </ul>
  )
}

export default Header;