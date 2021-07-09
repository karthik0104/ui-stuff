import React from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";
import axios from 'axios';
import UploadCV from "../components/upload-cv";
import Canvas1 from "./canvas1-cv";

import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl } from "react-bootstrap";

function onFileDownload(state) { 
		console.log('State is:');
		console.log(state.social_distancing);
		axios.get("http://localhost:5344/cv/api/downloadfile", {responseType: 'arraybuffer'})
		.then(response => {
			console.log(response)

			let blob = new Blob([response.data], { type: 'video/avi' }),
			url = window.URL.createObjectURL(blob)

			window.open(url)
		}); 
	};

function Offering1CV() {
	 const [state, setState] = React.useState({
    social_distancing: false,
	mask_recognition: false,
    emotion_detection: false
  });
  
  const handleToggle = ({ target }) =>
    setState(s => ({ ...s, [target.name]: !s[target.name] }));
	console.log('Toggle called...!');
	
	
	const styleH = {width: '445px', height: '240px', overflow: 'hidden'};
	const styleO = {color: '#ffffff',margin: '30px 30px 20px 40px'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'300px', 'background-color': '#57007e', 'border-color': '#57007e', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
	const styleB2 = {'width':'200px', 'background-color': '#ce0f3d', 'border-color': '#ce0f3d', 'height':'40px'};
	const styleCTE = {'height':'100px'}
	const styleT = {'width': '1000px', 'height':'50px', 'tab-color': '#ff414d', 'margin': '0px 0px 20px 0px'}
	const styleP = {'background-color':'lightgrey', 'color':'black', 'border-color':'lightgrey'}
	const styleCONT = {'border': 'solid', 'border-width': '2px', 'width':'80%', 'padding': '20px', 'border-radius':'25px', 'border-color': '#57007e', 'background-color': 'rgba(255,255,255,0.9)'}
	const styleL = {'float':'left', 'width':'50%'}
	const styleR = {'float':'right'}
	const styleTEXT = {'width':'300px'}
	const styleS3 = {'margin-top':'100px'}
	const styleI = {'width':'100%'}
	const styleCANVAS = {'width':'20%'}
	
  return (
    <>
	<div className="bg-color">
	<img src={require('../assets/images/digeye13.jpg')} alt="bg" style={styleI}/>
	</div>
	<div>
	<p style={styleO}><h4>Upload A Video</h4></p>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<div style={styleL}>
	<p><b><h8>*Step 1: Select a video from one of the sources:</h8></b></p>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={styleT}>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Upload From Computer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Share Youtube Link</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="third">Record Live Video</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
		  <UploadCV></UploadCV>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
      placeholder="eg. C:\Users\Downloads\video.mp4"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  <Button variant="info" size="lg" block style={styleB2}>
  
<h6>Upload</h6>
          </Button>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
<div style={styleR}>
	<p><b><h8>*Step 2: Select the apps you need for analysis:</h8></b></p>
  <Form.Check name="social_distancing" type="checkbox" label="Social Distancing" onChange={handleToggle}/>
  <Form.Check name="mask_recognition" type="checkbox" label="Mask Recognition"  onChange={handleToggle}/>
  <Form.Check name="emotion_detection" type="checkbox" label="Emotion Detection"  onChange={handleToggle}/>
 </div>
 <div style={styleS3}>
<br></br>  
<br></br>
<br></br>
<hr></hr>
<br></br>
<Button variant="info" size="lg" block style={styleB} onClick={() => onFileDownload(state)}>
			<h6>Launch Dashboard</h6>
          </Button>
		  </div>
</Container>
<div style={styleCANVAS}>
<Canvas1></Canvas1>
</div>
</div>
    </>
  );
}
export default Offering1CV;
