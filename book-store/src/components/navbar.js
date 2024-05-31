import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar({ activeComponent, handleLinkClick }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Book Management</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => handleLinkClick('Home')} className={activeComponent === 'Home' ? 'active' : ''}>Home</Nav.Link>
        <Nav.Link onClick={() => handleLinkClick('Books')} className={activeComponent === 'Books' ? 'active' : ''}>Books</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
