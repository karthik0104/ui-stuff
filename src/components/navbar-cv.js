import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleH = {margin: '-5px 70px 0px -100px'};

function NavBarCV(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
		<img
        src={require('../assets/images/acc.png')}
        width="100"
        height="30"
		style={styleH}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
	    Smart Workplace Safety &reg;
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/signin">About SWS</Nav.Link>
			<Nav.Link href="/signin">Contact Us</Nav.Link>
            <Nav.Link href="/signin">How It Works</Nav.Link>
            <Nav.Link href="#" onClick={() => props.handleShow('signUp')}>
              Login To View Apps !
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCV;
