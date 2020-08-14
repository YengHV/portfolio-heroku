import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './navbar.css';

function NavBarComp(){

return(
<Navbar className = "navBarColor" variant="dark">
  <Navbar.Brand href="/">Yeng Vang</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Repo">My Work</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
)
};

export default NavBarComp;

