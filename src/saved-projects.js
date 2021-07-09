import React, { useState } from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";
import axios from 'axios';
import UploadCV from "../components/upload-cv";
import Canvas1 from "./canvas1-cv";
import ConfigurationModal from "./configuration-modal";
import MenuTest from "./menu-test";


import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Accordion } from "react-bootstrap";

import NavbarCO from "../components/navbar-co";

function onGetLogs(componentState, schema_name, sftp) {
	var request_map = {}
	
	for (var prop in componentState) {
		if (componentState[prop] == true) {
			var res = prop.split('||');
			var module = res[0];
			var step = res[1];
			
			var index = request_map[module];
			if (index === undefined) {
				var ok2 = document.getElementById('text'.concat(prop)).value;
				request_map[module] = [{'component':step, 'data': JSON.parse(ok2)}];
				} else{
				request_map[module] = [...request_map[module], {'component':step, 'data': JSON.parse(ok2)}];
			}
		}
	}
	
	request_map['schema'] = schema_name;
	request_map['sftp_folder'] = sftp;
	console.log(request_map);
	
	axios({
	method: 'post',
	url: 'http://localhost:5344/workflow',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	});
	
	/*setInterval(() => axios.get("http://localhost:5344/logs")
		.then(response => {
			console.log(response)
		}), 5000);*/
};

function onSave(componentState, schema_name, sftp, project_name) {
	var request_map = {}
	
	for (var prop in componentState) {
		if (componentState[prop] == true) {
			var res = prop.split('||');
			var module = res[0];
			var step = res[1];
			
			var index = request_map[module];
			if (index === undefined) {
				var ok2 = document.getElementById('text'.concat(prop)).value;
				console.log('OKK!!!');
				console.log(document.getElementById('text'.concat(prop)).value);
				console.log(ok2);
				request_map[module] = [{'component':step, 'data': JSON.parse(ok2)}];
				} else{
				request_map[module] = [...request_map[module], {'component':step, 'data': JSON.parse(ok2)}];
			}
		}
	}
	
	request_map['schema'] = schema_name;
	request_map['sftp_folder'] = sftp;
	request_map['project_name'] = project_name;
	
	console.log(request_map);
	
	axios({
	method: 'post',
	url: 'http://localhost:5344/save-workflow',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	});
	
	/*setInterval(() => axios.get("http://localhost:5344/logs")
		.then(response => {
			console.log(response)
		}), 5000);*/
};


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

function SavedProjects(props) {
	 const [state, setState] = React.useState({
    social_distancing: false,
	mask_recognition: false,
    emotion_detection: false
  });
  
  const [componentState, setComponentState] = React.useState({});
  const [componentTextState, setComponentTextState] = React.useState({});
  
  //const [name, setName] = React.useState({});
  //const [sftp, setSftp] = React.useState({});
  
  const [logs, setLogs] = React.useState('');
  
  	const [signInShow, setSignInShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [completeProfileShow, setCompleteProfileShow] = useState(false);
  const [configParamShow, setConfigParamShow] = useState(false);
  const [componentName, setComponentName] = useState('');
  const [componentDisplayName, setComponentDisplayName] = useState('');
  
  const [clientName, setClientName] = useState('');
  const [sftpName, setSftpName] = React.useState('');
  
  const register = (clientName) => {
		setClientName(clientName);
  }
  
  const registerSftp = (sftpName) => {
		setSftpName(sftpName);
  }
  
  const handleClose = (type,component, component_display_name) => {
    if (type === "signIn") {
      setSignInShow(false);
	  
    } else if (type === "signUp") {
      setSignUpShow(false);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(false);
    } else if (type === "configParam") {
		setConfigParamShow(false);
		setSignInShow(true);
	}
  };

  
  const handleShow = (type,component, component_display_name) => {
    if (type === "signIn") {
      setSignInShow(true);
    } else if (type === "signUp") {
      setSignUpShow(true);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(true);
    } else if (type === "configParam") {
		setConfigParamShow(true);
		setComponentName(component);
		setComponentDisplayName(component_display_name);
	}
  };
  
  const id = props.match.params.requestId
  
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5344/get-workflow/".concat(id),
      "headers": {
        "content-type": "application/json",
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
	  updateComponentStates(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])	
  
  
  const updateComponentStates = (responseData) => {
	
	if (responseData && responseData['data'])
	{
	setClientName(responseData['data']['schema']);
	setSftpName(responseData['data']['sftp_folder']);
	setProjectName(responseData['data']['project_name']);
	
	
	let ok = responseData['data']['modules']
	
	Object.keys(ok).forEach(function(key) {
		var i;
		
		for (i=0; i<ok[key]['steps'].length; i++) {
			//console.log(ok[key]['steps'][i]['step'])
			setComponentState(s => ({ ...s, [ok[key]['module_name'].concat("||").concat(ok[key]['steps'][i]['step']).concat('||')]: ok[key]['steps'][i]['selected'] }));
			setComponentTextState(s => ({ ...s, ['text'.concat(ok[key]['module_name']).concat("||").concat(ok[key]['steps'][i]['step']).concat("||")]: JSON.stringify(ok[key]['steps'][i]['data'], null, 2) }));
		}
		});
	}
  };
  
   
  
  const nameChange = (e) => {
		//setClientName(e.target.value);
		setProjectName(e.target.value);
	}

  const sftpNameChange = (e) => {
		setSftpName(e.target.value);
	}
  

React.useEffect(() => {
  // asynchronous function to fetch logs
  const fetchLogs = async () => {
    try {
      const logResponse = await /* logic to fetch log */
      //setLogs(logResponse);
	  console.log(logResponse);
    } catch {
      // just don't update state, or set an error message in state,
      // basically anything you want to do to handle errors
    }
  }

  // setup interval to fetch logs
  const intervalTimer = setInterval(fetchLogs, 1000);

  // function to clean up effect when component unmounts
  return () => clearInterval(intervalTimer);
}, []); // empty dependency array to run when mounted

  
  const handleToggle = ({ target }) =>
    setComponentState(s => ({ ...s, [target.name]: !s[target.name] }));
	console.log('Toggle called...!');
	
	
	const styleH = {width: '445px', height: '240px', overflow: 'hidden'};
	const styleO = {color: '#ffffff',margin: '30px 30px 20px 200px'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'800px', 'background-color': '#00587a', 'border-color': '#00587a', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
	const styleB11 = {'width':'800px', 'background-color': '#2c7873', 'border-color': '#2c7873', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
	const styleB3 = {'width':'300px', 'background-color': '#232931', 'border-color': '#4a266a', 'height':'40px', 'margin-top':'10px'};
	const styleB2 = {'width':'200px', 'background-color': '#ce0f3d', 'border-color': '#ce0f3d', 'height':'40px'};
	const styleCTE = {'height':'100px'}
	const styleT = {'width': '1000px', 'height':'50px', 'tab-color': '#ff414d', 'margin': '0px 0px 20px 0px'}
	const styleP = {'background-color':'lightgrey', 'color':'black', 'border-color':'lightgrey'}
	const styleCONT = {'border': 'solid', 'border-width': '2px', 'width':'80%', 'padding': '20px', 'border-radius':'25px', 'border-color': '#00587a', 'background-color': 'rgba(255,255,255,0.9)'}
	const styleL = {'float':'left', 'width':'50%'}
	const styleR = {'float':'right'}
	const styleTEXT = {'width':'300px', 'border-color':'blue'}
	const styleS3 = {'margin-top':'50px'}
	const styleI = {'width':'100%'}
	const styleCANVAS = {'width':'20%'}
	const styleAcc1 = {color: '#ffffff'};
	const styleCARDH = {'background-color':'#34495e'};
	const styleOL = {'margin-top': '40px', 'background-color':'black', 'color':'black', 'height': '100px'};
	const styleIT = {'color':'white', 'background-color':'#797a7e'};
	const configure = {'float':'right', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module = {'float':'left', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module2 = {'float':'left', 'clear':'left', 'margin-bottom':'15px', 'margin-top':'1px'}
	const styleB12 = {'width':'1000px'}
	
  return (
    <>
	{document.body.style.zoom = "80%"}
	<NavbarCO handleShow={handleShow} handleClose={handleClose} />
	<MenuTest></MenuTest>
	<div className="bg-color">
	<img src={require('../assets/images/co4.jpeg')} alt="bg" style={styleI}/>
	</div>
	<div>
	<p style={styleO}><h4>Onboard A New Client</h4></p>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<p><b><h8>*Step 1: Specify Project Name</h8></b></p>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
      placeholder="eg. Cargill"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
	  value={projectName}
	  onChange={nameChange}
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
	
	<hr></hr>
	<p><b><h8>*Step 2: Download Input File Templates</h8></b></p>
  <Form.Check name="social_distancing" type="checkbox" label="Employee Level Data" onChange={handleToggle}/>
  <Form.Check name="mask_recognition" type="checkbox" label="Value Case"  onChange={handleToggle}/>
  <Form.Check name="emotion_detection" type="checkbox" label="Currency"  onChange={handleToggle}/>
  <br></br>
  <Button variant="info" size="lg" block style={styleB3} onClick={() => onFileDownload(state)}>
			<h6>Download Selected Templates</h6>
          </Button>  
	<br></br>
	<hr></hr>
	<p><b><h8>*Step 3: Upload Input Files</h8></b></p>
	<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={styleT}>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Employee Level Data</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Value Case</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="third">Future Jobs</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
		  <UploadCV></UploadCV>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <UploadCV></UploadCV>
        </Tab.Pane>
		<Tab.Pane eventKey="third">
          <UploadCV></UploadCV>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

	<br></br>
	<br></br>
	<hr></hr>
	<br></br>
	<p><b><h8>*Step 4: Select The Components For Processing</h8></b></p>
	<Button variant="danger" size="xl" onClick={() => handleShow('configParam')}>&#9881; Configure Global Parameters</Button>
	<br></br>
	<br></br>
	<Accordion defaultActiveKey="0" style={{'width':'50%'}}>
	{console.log('DATAAAA:')}
	{console.log(responseData['data'])}
	{responseData && responseData['data']['modules'].map((custom, key) => {
			  return (
				<Card>
    <Card.Header style={styleCARDH}>
      <Accordion.Toggle as={Button} variant="link" eventKey={custom.module_name}>
        <div style={styleAcc1}><b>{custom.module_display_name}</b></div>
      </Accordion.Toggle>
    </Card.Header>
	{custom['steps'].map((custom2, key2) => { 
	return (
    <Accordion.Collapse eventKey={custom.module_name}>
      <Card.Body>
	  <div>
	  <div style={module2}>
	  <Form.Check id={custom.module_name.concat('||').concat(custom2.step).concat('||')} name={custom.module_name.concat('||').concat(custom2.step).concat('||')} type="checkbox" label={custom2.step_display_name} onChange={handleToggle} checked={componentState[custom.module_name.concat('||').concat(custom2.step).concat('||')]}/>
	  </div>
	  <div style={configure}>
	  <Button variant="primary" size="sm" onClick={() => handleShow('configParam', custom2.step, custom2.step_display_name)}>&#9881; Configure Component</Button>
	  </div>
	  <InputGroup style={styleOL} id={"ok".concat("2")}>
    <InputGroup.Prepend>
      <InputGroup.Text style={styleIT}><b>JSON Data</b></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id={'text'.concat(custom.module_name).concat('||').concat(custom2.step).concat('||')} as="textarea" aria-label="With textarea" value={componentTextState['text'.concat(custom.module_name).concat('||').concat(custom2.step).concat('||')]} />
		  </InputGroup>
	  
	  </div>
	  </Card.Body>
    </Accordion.Collapse>
	)
		  })}
  </Card>
  )
		  })}
			  
</Accordion>

 <div style={styleS3}>
<hr></hr>
<br></br>
<Button variant="info" size="lg" block style={styleB} onClick={() => onSave(componentState, clientName, sftpName, projectName)}>
			<h6>Save Project</h6>
          </Button>
<br></br>
<Button variant="info" size="lg" block style={styleB11} onClick={() => onGetLogs(componentState, clientName, sftpName)}>
			<h6>Start Processing</h6>
          </Button>
		  </div>
<InputGroup style={styleOL}>
    <InputGroup.Prepend>
      <InputGroup.Text style={styleIT}><b>Output Logs</b></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</Container>

</div>
<ConfigurationModal
        configParamShow={configParamShow}
		handleClose={handleClose}
        handleShow={handleShow}
		componentName={componentName}
		clientName={clientName}
		sftpName={sftpName}
		componentState={componentState}
		componentDisplayName={componentDisplayName}
		onRegister={register}
		onSftp={registerSftp}
      />
    </>
  );
}
export default SavedProjects;
