import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Button } from "react-bootstrap";
import MenuTest from "./menu-test";
import NavbarMSH from "../components/navbar-ms-header";

function CardDisplay() {
  return (
    <CardColumns>
      <Card style={{"boxShadow": "7px 7px 7px #9E9E9E", 'background-color':'#eeeeee'}}>
        <Card.Img variant="top" src={require('../assets/images/ms_img1.jpg')} height="170px"/>
        <Card.Body>
          <Card.Title><font size="3" color="#333456">Maintain Your Personalized Application Calendar (PAC)</font></Card.Title>
          <Card.Text>
            Card Text This card has supporting text below as a natural lead-in
            to additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{"boxShadow": "7px 7px 7px #9E9E9E", 'margin-left':'30px'}}>
        <Card.Img variant="top" src={require('../assets/images/ms_img2.jpg')} height="170px"/>
        <Card.Body>
          <Card.Title><font size="3" color="#333456">Keep LORs, SOP And Other Docs At Your Fingertips</font></Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{"boxShadow": "7px 7px 7px #9E9E9E", 'margin-left':'50px', 'background-color':'#eeeeee'}}>
        <Card.Img variant="top" src={require('../assets/images/ms_img3.jpg')} height="170px"/>
        <Card.Body>
          <Card.Title><font size="3" color="#333456">Receive Notifications & Reminders About Deadlines</font></Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}
function MSPlannerLP() {
  return (
  <div>
  <MenuTest></MenuTest>
  <div style={{'border-width':'1px', 'border-radius':'25px', 'border-color':'rgba(51, 170, 51, .1)', 'border-style':'solid', 'margin-left':'125px', 'margin-right':'75px', 'margin-top':'35px', 
  'background-color':'rgba(51, 51, 81, .05)', "boxShadow": "7px 7px 7px #9E9E9E"}}>
  <div style={{'margin-top':'20px', 'margin-left':'30px'}}>
  <font size="4" color="#e84545"><b>Welcome to your personalized planner, User !</b></font>
  </div>
  
    <div style={{'margin-left':'25px', 'margin-right':'75px', 'margin-top':'25px', 'margin-bottom':'25px'}}>
      <CardDisplay />
    </div>
	<div style={{'margin-bottom':'20px'}}>
	<center>
	<Button variant="info" size="lg" style={{'width':'500px', 'text-align':'center', 'padding':'5px', 'background-color':'#14274e'
	, "boxShadow": "7px 7px 7px #9E9E9E"}}>
			<font size="3">Let's Get Started</font>
          </Button>
	</center>
	</div>
	</div>
	
	</div>
  );
}

export default MSPlannerLP;