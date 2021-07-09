import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Button, Form, Col } from "react-bootstrap";
import MenuTest from "./menu-test";
import NavbarMSH from "../components/navbar-ms-header";


function MSPlannerNP() {
  return (
  <div>
  <MenuTest></MenuTest>
  
  <div style={{'margin-left':'120px', 'margin-top':'20px'}}>
  <font size="5" color="#333456"><b>Create New Plan</b></font>
  </div>
  
  <div style={{'border-width':'1px', 'border-radius':'25px', 'border-color':'rgba(51, 170, 51, .1)', 'border-style':'solid', 'margin-left':'125px', 'margin-right':'55px', 'margin-top':'5px', 
  'background-color':'rgba(51, 51, 81, .07)', "boxShadow": "7px 7px 7px #9E9E9E", 'width':'60%'}}>
  <div style={{'margin-top':'20px', 'margin-left':'50px'}}>
	<Button variant="info" size="lg" style={{'width':'300px', 'text-align':'center', 'padding':'5px', 'background-color':'#900c3f', 'margin-right':'20px',
	'border':'none'}}>
			<font size="2"><b>I wish to apply for a college / university</b></font>
          </Button>
	
	
	<b>OR</b>
	
	<Button variant="info" size="lg" style={{'width':'300px', 'text-align':'center', 'padding':'5px', 'background-color':'#303960', 'margin-left':'20px',
	'border':'none'}}>
			<font size="2"><b>I already have an admit, I need to plan further</b></font>
          </Button>
	
	</div>
	
	<div style={{'margin-left':'50px', 'margin-top':'20px'}}>
  <font size="4" color="#333456"><b>Details</b></font>
  </div>
  
	<div style={{'width':'90%', 'margin-left':'50px'}}>
	<hr></hr>
	</div>
	
	<div style={{'width':'50%', 'margin-left':'50px'}}>
	<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label><font size="2"><b>College / University Name</b></font></Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label><font size="2"><b>Course</b></font></Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>MS</option>
		<option>BS</option>
      </Form.Control>
    </Form.Group>
	
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label><font size="2"><b>Area Of Specialization</b></font></Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
    
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label><font size="2"><b>GRE Score</b></font></Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label><font size="2"><b>TOEFL/IELTS Score</b></font></Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label><font size="2"><b>Admit Term</b></font></Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Spring</option>
		<option>Fall</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label><font size="2"><b>Year</b></font></Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
	
	<br></br>

	<div style={{'margin-bottom':'20px'}}>
	
  <Button variant="primary" type="submit">
    <font size="2">Create Personalized Application Calendar (PAC)</font>
  </Button>
  
  </div>
  
</Form>
	</div>
  </div>
	
	</div>
  );
}

export default MSPlannerNP;