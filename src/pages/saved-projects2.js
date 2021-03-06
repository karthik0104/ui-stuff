import React, { useState } from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";
import axios from 'axios';
import UploadNWSFile from "../components/upload-nws-file";
import Canvas1 from "./canvas1-cv";
import ConfigurationModal from "./configuration-modal";
import MenuTest from "./menu-test";

import CreateDropDownList from "../components/industry-dropdown";
import  { Redirect, useHistory } from 'react-router-dom'

import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Accordion, Spinner, Toast } from "react-bootstrap";
import { Checkmark } from 'react-checkmark';

import NavbarCO from "../components/navbar-co";

function onFileDownload() { 
		//console.log('State is:');
		//console.log(state.social_distancing);
		axios.get("http://10.166.90.51:8102/download-templates", {responseType: 'blob'})
		.then(response => {
			const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = downloadUrl;
			link.setAttribute('download', 'templates.zip'); //any other extension
			document.body.appendChild(link);
			link.click();
			link.remove();
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
  const [name, setName] = React.useState({});
  const [sftp, setSftp] = React.useState({});
  
  const [logs, setLogs] = React.useState('');
  
  	const [signInShow, setSignInShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [completeProfileShow, setCompleteProfileShow] = useState(false);
  const [configParamShow, setConfigParamShow] = useState(false);
  const [componentName, setComponentName] = useState('');
  const [componentDisplayName, setComponentDisplayName] = useState('');
  
  const [clientName, setClientName] = useState('');
  const [sftpName, setSftpName] = React.useState('');
  
  const [onet, setOnet] = useState(false);
  const [client, setClient] = React.useState(false);
  
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  
  const [nwsDataTemplateSaved, setNwsDataTemplateSaved] = React.useState(false);
  const [nwsDataTemplateSaving, setNwsDataTemplateSaving] = React.useState(false);
  
  const [show, setShow] = React.useState(false);
  const [projectName, setProjectName] = React.useState('');
  const [styleProject, setStyleProject] = React.useState({'color':'red', 'display':'none', 'margin-bottom':'10px'});
  const [styleSchema, setStyleSchema] = React.useState({'color':'red', 'display':'none', 'margin-left':'450px', 'margin-bottom':'20px'});
  
  const [log, setLog] = React.useState('');
  
  const register = (clientName) => {
		setClientName(clientName);
  }
  
  const registerSftp = (sftpName) => {
		setSftpName(sftpName);
  }
  
  const registerOnet = (onet) => {
		setOnet(onet);
  }
  
  const registerClient = (client) => {
		setClient(client);
  }
  
  const handleClose = (type) => {
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

  const onSave = (componentState, schema_name, sftp, project_name) => {
	var request_map = {}
	
	if ((clientName === '') || (clientName === undefined)) {
		setStyleSchema({'color':'red', 'margin-left':'450px', 'margin-bottom':'20px'});
		return;
	} else if ((sftpName === '')  || (sftpName === undefined)) {
		setStyleSchema({'color':'red', 'margin-left':'450px', 'margin-bottom':'20px'});
		return;
	} else {
		setStyleSchema({'color':'red', 'margin-left':'450px', 'margin-bottom':'20px', 'display':'none'});
	}
	
	for (var prop in componentState) {
		if (componentState[prop] == true) {
			var res = prop.split('||');
			var module = res[0];
			var step = res[1];
			var app = res[2];
			
			var index = request_map[module];
			if (index === undefined) {
				console.log("Prop:");
				console.log(prop);
				var ok2 = document.getElementById('text'.concat(prop)).value;
				console.log('OKK!!!');
				console.log(document.getElementById('text'.concat(prop)).value);
				console.log(prop);
				console.log(ok2);
				request_map[module] = [{'component':app, 'data': JSON.parse(ok2)}];
				} else{
				request_map[module] = [...request_map[module], {'component':app, 'data': JSON.parse(ok2)}];
			}
		}
	}
	
	request_map['schema'] = schema_name;
	request_map['sftp_folder'] = sftp;
	request_map['project_name'] = project_name;
	
	console.log(request_map);
	
	setSaved(false);
	setSaving(true);
	axios({
	method: 'post',
	url: 'http://10.166.90.51:8102/save-workflow',
	"headers": {
        "content-type": "application/json",
		"Authorization": "token123"
	},
	data: request_map
	}).then(result => 
	handleSavedResult());
	
	/*setInterval(() => axios.get("http://10.166.90.51:8102/logs")
		.then(response => {
			console.log(response)
		}), 5000);*/
	};
	
  const onGetLogs = (componentState, schema_name, sftp) => {
	var request_map = {}
	
	for (var prop in componentState) {
		if (componentState[prop] == true) {
			var res = prop.split('||');
			var module = res[0];
			var step = res[1];
			var app = res[2];
			
			var index = request_map[module];
			var ok2 = document.getElementById('text'.concat(prop)).value;
			if (index === undefined) {
				request_map[module] = [{'component':app, 'data': JSON.parse(ok2)}];
				} else{
				request_map[module] = [...request_map[module], {'component':app, 'data': JSON.parse(ok2)}];
			}
		}
	}
	
	request_map['schema'] = schema_name;
	request_map['sftp_folder'] = sftp;
	console.log(request_map);
	
	axios({
	method: 'post',
	url: 'http://10.166.90.51:8102/workflow',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	});
	
	setInterval(() => axios.get("http://10.166.90.51:8102/logs")
		.then(response => {
			//console.log(response)
			setLog(response.data);
			var textarea = document.getElementById('ta2');
			textarea.scrollTop = textarea.scrollHeight;
		}), 5000);
};
	
  const handleSavedResult = () => {
	  setSaving(false);
	  setSaved(true);
	  setShow(true);
  }
  
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
      "url": "http://10.166.90.51:8102/get-workflow/".concat(id),
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
  
  const ctChange = ({target}) => {
		//setState2({sftp: e.target.value});
		console.log('TARGET:::');
		console.log(target);
		setComponentTextState(s => ({ ...s, [target.id]: target.value }));
		//props.onSftp(state2.sftp);
	}
  
  const updateComponentStates = (responseData) => {
	
	if (responseData && responseData['data'])
	{
		setClientName(responseData['data']['schema']);
		setProjectName(responseData['data']['project_name']);
	setSftpName(responseData['data']['sftp_folder']);
	let ok = responseData['data']['modules']
	
	Object.keys(ok).forEach(function(key) {
		var i;
		
		for (i=0; i<ok[key]['steps'].length; i++) {
			//console.log(ok[key]['steps'][i]['app'])
			setComponentState(s => ({ ...s, [ok[key]['module_name'].concat("||").concat(ok[key]['steps'][i]['app']).concat('||').concat(ok[key]['steps'][i]['step_name'])]: ok[key]['steps'][i]['selected'] }));
			setComponentTextState(s => ({ ...s, ['text'.concat(ok[key]['module_name']).concat("||").concat(ok[key]['steps'][i]['app']).concat("||").concat(ok[key]['steps'][i]['step_name'])]: JSON.stringify(ok[key]['steps'][i]['data'], null, 2) }));
		}
		});
	}
  };
  
  const projectNameChange = (e) => {
		setProjectName(e.target.value);
	}

  const projectNameChangeBlur = (e) => {
		//setProjectName(e.target.value);
		if (['Test', 'Test2'].includes(e.target.value)) {
			setStyleProject({'color':'red', 'margin-bottom':'10px'});
		} else {
			setStyleProject({'color':'red', 'display':'none', 'margin-bottom':'10px'});
		}
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
	const styleT = {'width': '1500px', 'height':'50px', 'tab-color': '#ff414d', 'margin': '0px 0px 20px 0px'}
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
	const styleOL = {'margin-top': '40px', 'background-color':'black', 'color':'black', 'height': '200px'};
	const styleIT = {'color':'white', 'background-color':'#797a7e'};
	const configure = {'float':'right', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module = {'float':'left', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module2 = {'float':'left', 'clear':'left', 'margin-bottom':'15px', 'margin-top':'1px', 'font-size':'18px'}
	const styleB12 = {'width':'1000px'}
	//const styleProject = {'color':'red', 'margin-bottom':'10px'}
	
	const history = useHistory();
	
  return (
			<>	
			{document.body.style.zoom = "80%"}
			<NavbarCO handleShow={handleShow} handleClose={handleClose} />
			{(localStorage.getItem('nws_token') == undefined)?history.push('client-onboarding-login'):''}
	<div className="bg-color">
	<img src={require('../assets/images/co4.jpeg')} alt="bg" style={styleI}/>
	</div>
	<div>
	<p style={styleO}><h4>Create New Project</h4></p>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<p><b><h8>*Step 1.1: Specify Project Name</h8></b></p>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
	  onChange={projectNameChange}
	  onBlur={projectNameChangeBlur}
	  value={projectName}
      placeholder=""
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  <div style={styleProject}>This project name is already taken ! Please enter a new name.</div>
  
  <p><b><h8>*Step 1.2: Select Industry</h8></b></p>
  <div style={{'width':'250px'}}>
  <CreateDropDownList></CreateDropDownList>
  </div>
	
	<hr></hr>
	<p><b><h8>*Step 2: Download Input File Templates</h8></b></p>
  <Form.Check name="social_distancing" type="checkbox" label="Employee Level Data (NWS Data Template)"/>
  <Form.Check name="mask_recognition" type="checkbox" label="Value Case"/>
  <Form.Check name="mask_recognition" type="checkbox" label="Future Jobs"/>
  <Form.Check name="mask_recognition" type="checkbox" label="Workflow Manager"/>
  <Form.Check name="mask_recognition" type="checkbox" label="Currency"/>
  <Form.Check name="mask_recognition" type="checkbox" label="Workforce"/>
  <Form.Check name="emotion_detection" type="checkbox" label="Competitors"/>
  <br></br>
  <Button variant="info" size="lg" block style={styleB3} onClick={() => onFileDownload()}>
			<h6>Download Selected Templates</h6>
          </Button>  
	<br></br>
	<hr></hr>
	<Button variant="danger" size="xl" onClick={() => handleShow('configParam')}>&#9881; Configure Global Parameters</Button>
	<br></br>
	<br></br>
	<p><b><h8>*Step 3: Upload Input Files</h8></b></p>
	<div style={{'margin-right':'400px'}}><p><b><h8>(Note: If you have already uploaded the files via Yarkon s3, you would just need to specify the s3 folder name above in Configure Global Parameters. No need to upload files in this step.)</h8></b></p></div>
	<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={styleT}>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Employee Level Data (NWS Data Template)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Value Case</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="third">Future Jobs</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="fourth">Workflow Manager</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="fifth">Currency</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="sixth">Workforce</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="seventh">Competitors (BG Query Entity)</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
		  <UploadNWSFile
		  fileType="nws_data_template"
		  projectName={sftpName}></UploadNWSFile>
			 
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <UploadNWSFile
		  fileType="value_case"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
		<Tab.Pane eventKey="third">
          <UploadNWSFile
		  fileType="future_jobs"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
		<Tab.Pane eventKey="fourth">
          <UploadNWSFile
		  fileType="workflow_manager"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
		<Tab.Pane eventKey="fifth">
          <UploadNWSFile
		  fileType="currency"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
		<Tab.Pane eventKey="sixth">
          <UploadNWSFile
		  fileType="workforce"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
		<Tab.Pane eventKey="seventh">
          <UploadNWSFile
		  fileType="bg_query_entity"
		  projectName={sftpName}></UploadNWSFile>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
<div style={{'margin-top': '250px'}}>
</div>
	<hr></hr>
	<br></br>
	<p><b><h8>*Step 4: Select The Components For Processing</h8></b></p>
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
	  <Form.Check name={custom.module_name.concat('||').concat(custom2.app).concat('||').concat(custom2.step_name)} type="checkbox" label={custom2.step_display_name} onChange={handleToggle} checked={componentState[custom.module_name.concat('||').concat(custom2.app).concat('||').concat(custom2.step_name)]}/>
	  </div>
	  <div style={configure}>
	  <Button variant="primary" size="sm" onClick={() => handleShow('configParam', custom2.app, custom2.step_display_name)}>&#9881; Configure Component</Button>
	  </div>
	  <InputGroup style={styleOL} id={"ok".concat("2")}>
    <InputGroup.Prepend>
      <InputGroup.Text style={styleIT}><b>JSON Data</b></InputGroup.Text>
    </InputGroup.Prepend>
	<FormControl id={'text'.concat(custom.module_name).concat('||').concat(custom2.app).concat('||').concat(custom2.step_name)} as="textarea" aria-label="With textarea" value={componentTextState['text'.concat(custom.module_name).concat('||').concat(custom2.app).concat('||').concat(custom2.step_name)]} onChange={ctChange} />
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
{saving?<Spinner animation="border" role="status" style={{'margin-left':'630px', 'margin-top':'-50px', 'margin-bottom':'10px'}}><span className="sr-only">Loading...</span></Spinner>:''}
<div style={{'margin':'auto'}}>
<div>
{saved?<Checkmark></Checkmark>:''}
{saved?<br></br>:''}
</div>
<div>
  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{'margin':'auto'}}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Project Saved Successfully !</Toast.Body>
			  </Toast>
</div>
</div>
{show?<br></br>:''}
<div style={styleSchema}>Please specify schema name and s3 folder name</div>
<Button variant="info" size="lg" block style={styleB}  onClick={() => onSave(componentState, clientName, sftpName, projectName)}>
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
    <FormControl id="ta2" as="textarea" aria-label="With textarea" value={log}/>
  </InputGroup>
</Container>

</div>
<ConfigurationModal
        configParamShow={configParamShow}
		handleClose={handleClose}
        handleShow={handleShow}
		clientName={clientName}
		sftpName={sftpName}
		componentName={componentName}
		componentState={componentState}
		componentDisplayName={componentDisplayName}
		onRegister={register}
		onSftp={registerSftp}
		onOnet={registerOnet}
		onClient={registerClient}
		onet={onet}
		client={client}
      />
	  </>
  );
}
export default SavedProjects;
