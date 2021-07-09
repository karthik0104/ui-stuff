import React from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";

import { Container, CardGroup, Card, Button } from "react-bootstrap";

function OfferingCV() {
	const styleH = {height: '280px', overflow: 'hidden'};
	const styleO = {color: '#ffffff',margin: '40px 40px 40px 40px'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'200px', 'background-color': '#c70039', 'border-color': '#c70039'};
	const styleCTE = {'height':'100px'}
	const styleI = {'width':'100%'}
	
  return (
    <>
	<div className="bg-color">
	<img src={require('../assets/images/digeye12.jpg')} alt="bg" style={styleI}/>
	</div>
	<p style={styleO}><h4>The Arsenal Of SWS Apps</h4></p>
	  <CardGroup style={styleCG}>
  <Card style={styleC}>
    <Card.Img variant="top" src={require('../assets/images/digeye4.jpg')} style={styleH}/>
    <Card.Body>
      <Card.Title style={styleCT}>Social Distancing Detection</Card.Title>
      <Card.Text style={styleCTE}>
        This app is to monitor metrics related to Social Distancing between organization's employees.
      </Card.Text>
	  <Button variant="primary" size="lg" style={styleB}>Explore &nbsp;&nbsp;></Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Used by 300+ users</small>
    </Card.Footer>
  </Card>
  <Card style={styleC}>
    <Card.Img variant="top" src={require('../assets/images/digeye5.jpg')} style={styleH}/>
    <Card.Body>
      <Card.Title style={styleCT}>Mask Recognition</Card.Title>
      <Card.Text style={styleCTE}>
        This app is to monitor metrics related to Social Distancing between organization's employees.
      </Card.Text>
	  <Button variant="primary" size="lg" style={styleB}>Explore &nbsp;&nbsp;></Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Used by 300+ users</small>
    </Card.Footer>
  </Card>
  <Card style={styleC}>
    <Card.Img variant="top" src={require('../assets/images/digeye6.jpg')} style={styleH}/>
    <Card.Body>
      <Card.Title style={styleCT}>Emotion Detection</Card.Title>
      <Card.Text style={styleCTE}>
        This app is to monitor metrics related to Social Distancing between organization's employees.
      </Card.Text>
	  <Button variant="primary" size="lg" style={styleB}>Explore &nbsp;&nbsp;></Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Used by 300+ users</small>
    </Card.Footer>
  </Card>
</CardGroup>
      <FooterCV />
    </>
  );
}
export default OfferingCV;
