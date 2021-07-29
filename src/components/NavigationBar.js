import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import {Button,Container ,NavDropdown } from 'react-bootstrap';
import ContactModal from "./ContactModal"



function NavigationBar(props){


    return (
      <React.Fragment>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/" bold>SGGSMUN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/">Letter From Principle</Nav.Link>
        <Nav.Link href="/">Organizing committee</Nav.Link>
        <Nav.Link href="/">Letter from secretariat</Nav.Link>
        <Nav.Link href="/">Secretariat</Nav.Link>
        <NavDropdown title="Committees" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <Nav.Link><ContactModal/></Nav.Link>
</Navbar>
</React.Fragment>
    );
  }


export default NavigationBar;
