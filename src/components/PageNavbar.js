import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css";
import { Link, useLocation } from 'react-router-dom';

function PageNavbar() {
  const location = useLocation();

  // Define an array of page paths where the navbar should be shown
  const navbarVisiblePages = ['/', '/Aboutus', '/Programs', '/Register1', '/Register2', '/Register3', '/Register4', '/Contactus'];

  // Check if the current location is in the navbarVisiblePages array
  const shouldShowNavbar = navbarVisiblePages.includes(location.pathname);

  if (!shouldShowNavbar) {
    return null; // Return null if the navbar should not be shown for the current page
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
      <Navbar.Brand>
      <a href="/">
        <img src= "images/Drawing.png" width="200px" height="110px" />
        </a>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navBarLink' href="/Aboutus">ABOUT</Nav.Link>
            <Nav.Link className='navBarLink' href="/Programs">PROGRAMS</Nav.Link>
            <Nav.Link className='navBarLink' href="/Register1">REGISTER</Nav.Link>
            <Nav.Link className='navBarLink' href="/Contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;