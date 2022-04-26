import React from 'react';
import { Navbar, Nav, Container, Image } from "react-bootstrap";


const logOut = () => {
  localStorage.clear("user");
};

const NavBar = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  var navLinks = (
    <Nav>
      <Nav.Link href="/home">Inicio</Nav.Link>
      <Nav.Link href="/profile">Perfil</Nav.Link>
       
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
      <Nav.Link href="/" onClick={logOut}>Salir</Nav.Link>
    </Nav>
  );

  
  if (user != undefined) {
    navLinks = (
      <Nav>
        <Nav.Link href="/home">
          <Image src={user.photoUrl} width="20px" height="20px" roundedCircle />
        </Nav.Link>

        <Nav.Link href="/home"><strong>{user.name}</strong></Nav.Link>
        <Nav.Link href="/search-results">Search Results</Nav.Link>   
          
        <Nav.Link href="/home">Inicio</Nav.Link>
        <Nav.Link href="/profile">Perfil</Nav.Link>
        <Nav.Link href="/" onClick={logOut}>Salir</Nav.Link>
          
      </Nav>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Experts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {navLinks}
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default NavBar;