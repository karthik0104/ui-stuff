import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleH = {margin: '0px 0px 0px -50px'};

function NavBarOwn(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" style={styleH}>
	    <font size="5" face="Showcard Gothic"><font color="red">K</font><font color="lightgreen">R</font><font color="yellow">A</font><font color="skyblue">F</font><font color="orange">T</font> <font color="#e11d74"><i>Korner</i></font>&nbsp;&nbsp;&reg;&nbsp; </font><i><font size="2">Hand-made jewellery & articles, now at your doorstep</font></i>
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

export default NavBarOwn;
