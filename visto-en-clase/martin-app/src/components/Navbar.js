import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

const NavbarComp = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">Services</NavItem>
        <NavItem eventKey={3} href="#">Portfolio</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Contacto</NavItem>
        <NavItem eventKey={2} href="#">Chat</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default NavbarComp;