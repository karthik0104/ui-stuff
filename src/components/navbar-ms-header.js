import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleH = {margin: '-5px 70px 0px -100px'};

function NavBarMSH(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
	    <div style={{'font-family':'arial'}}><font color="#f1f3f8" size="3"><b>Welcome to your personalized guide, User !</b></font></div>
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMSH;
