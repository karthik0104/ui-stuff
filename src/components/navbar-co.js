import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import  { Redirect, useHistory } from 'react-router-dom'

const styleH = {margin: '-5px 70px 0px -100px'};

function NavBarCV(props) {
	const history = useHistory();
	
	const onLogOut = (componentState, schema_name, sftp) => {
		localStorage.clear()
		
		history.push('/client-onboarding-login');
	
	}
	
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{'m':'left'}}>
	    New Workforce Solutions &reg;&nbsp;&nbsp;<font size="2">Human Capital Analytics</font>
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/signin">Welcome, {localStorage.getItem("nws_first_name")} {localStorage.getItem("nws_last_name")} </Nav.Link>
          </Nav>
		  <div style={{'margin-left':'100px', 'float':'right', 'color':'yellow', 'style':'bold'}} onClick={() => onLogOut()}>
		  <b>Log Out</b>
		  </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCV;
