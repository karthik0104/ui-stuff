import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleH = {margin: '0px 20px 0px 0px'};

function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
		<img
        src={require('../assets/images/logo2.jpg')}
        width="50"
        height="30"
		style={styleH}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
	    TuLance &reg;
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/signin">About Us</Nav.Link>
			<Nav.Link href="/signin">Quick Help</Nav.Link>
            <Nav.Link href="/signin">How It Works</Nav.Link>
            <Nav.Link href="/signin">Contact Us</Nav.Link>
            <Nav.Link href="#" onClick={() => props.handleShow('signUp')}>
              SignUp/Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
