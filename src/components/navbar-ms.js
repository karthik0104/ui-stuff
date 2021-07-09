import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styleH = {margin: '-5px 70px 0px -100px'};

function NavBarCV(props) {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
	    MS-Buddy
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/ms/new-plan"><font color="yellow">+ Create New Plan</font></Nav.Link>
			<Nav.Link href="/signin">Contact Us</Nav.Link>
            <Nav.Link href="/signin"><img src={require('../assets/images/header_notif.png')} alt="bg" style={{'margin-left':'20px', 
			'width':'25px', 'height':'25px'}}/></Nav.Link>
            <Nav.Link href="#" onClick={() => props.handleShow('signUp')}>
              <img src={require('../assets/images/header_profile.png')} alt="bg" style={{'width':'25px', 'height':'25px'}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCV;
