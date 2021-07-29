import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import {Container ,NavDropdown } from 'react-bootstrap';
import ContactModal from "./ContactModal"



function NavigationBar(props){


    return (
      <React.Fragment>
      <Navbar bg="light" expand="lg" >
  <Container fluid>
    <Navbar.Brand href="/" bold>SGGSMUN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/letterfromprinciple">Letter From Principle</Nav.Link>
        <Nav.Link href="/organisingcommittee">Organizing committee</Nav.Link>
        <Nav.Link href="/letterfromsecretariat">Letter from secretariat</Nav.Link>
        <Nav.Link href="/secretariat">Secretariat</Nav.Link>
        <NavDropdown title="Committees" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">United Nations General Assembly (UNGA DISEC)
</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">United Nations Security Council (UNSC)
</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">United Nations Human Rights Council (UNHRC)
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">Economic and Social Council (ECOSOC)

</NavDropdown.Item>


        </NavDropdown>

      </Nav>
      <Nav.Link><ContactModal/></Nav.Link>
    </Navbar.Collapse>

  </Container>

</Navbar>
</React.Fragment>
    );
  }


export default NavigationBar;
