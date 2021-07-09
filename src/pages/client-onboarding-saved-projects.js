import React, { useState } from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";
import SavedProjectsTable from "../components/co-saved-projects";
import axios from 'axios';
import UploadNWSFile from "../components/upload-nws-file";
import Canvas1 from "./canvas1-cv";
import ConfigurationModal from "./configuration-modal";
import MenuTest from "./menu-test";

import CreateDropDownList from "../components/industry-dropdown";

import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Accordion, Spinner, Toast } from "react-bootstrap";
import { Checkmark } from 'react-checkmark';

import  { Redirect, useHistory } from 'react-router-dom'

import NavbarCO from "../components/navbar-co";

function onFileDownload() { 
		//console.log('State is:');
		//console.log(state.social_distancing);
		axios.get("http://10.66.90.51:8102/download-templates", {responseType: 'blob'})
		.then(response => {
			const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = downloadUrl;
			link.setAttribute('download', 'template.xlsx'); //any other extension
			document.body.appendChild(link);
			link.click();
			link.remove();
		}); 
	};

function ClientOnboardingSavedProjects() {
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
  
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  
  const [nwsDataTemplateSaved, setNwsDataTemplateSaved] = React.useState(false);
  const [nwsDataTemplateSaving, setNwsDataTemplateSaving] = React.useState(false);
  
  const [show, setShow] = React.useState(false);
  const [projectName, setProjectName] = React.useState('');
  
  const [log, setLog] = React.useState('');
  
  const register = (clientName) => {
		setClientName(clientName);
  }
  
  const registerSftp = (sftpName) => {
		setSftpName(sftpName);
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

  const onSave = (componentState, schema_name, sftp) => {
	var request_map = {}
	
	for (var prop in componentState) {
		if (componentState[prop] == true) {
			var res = prop.split('||');
			var module = res[0];
			var step = res[1];
			
			var index = request_map[module];
			if (index === undefined) {
				console.log("Prop:");
				console.log(prop);
				var ok2 = document.getElementById('text'.concat(prop)).value;
				console.log('OKK!!!');
				console.log(document.getElementById('text'.concat(prop)).value);
				console.log(prop);
				console.log(ok2);
				request_map[module] = [{'component':step, 'data': JSON.parse(ok2)}];
				} else{
				request_map[module] = [...request_map[module], {'component':step, 'data': JSON.parse(ok2)}];
			}
		}
	}
	
	request_map['schema'] = schema_name;
	request_map['sftp_folder'] = sftp;
	console.log(request_map);
	
	setSaved(false);
	setSaving(true);
	axios({
	method: 'post',
	url: 'http://10.166.90.51:8102/save-workflow',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	}).then(result => 
	handleSavedResult());
	
	/*setInterval(() => axios.get("http://localhost:5344/logs")
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
			
			var index = request_map[module];
			var ok2 = document.getElementById('text'.concat(prop)).value;
			if (index === undefined) {
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
	url: 'http://10.166.90.51:8102/workflow',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	});
	
	
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
  
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://10.166.90.51:8102/modules",
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
	setSftpName(responseData['data']['sftp_folder']);
	let ok = responseData['data']
	
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
  
  const projectNameChange = (e) => {
		setProjectName(e.target.value);
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
	const styleB = {'width':'200px', 'background-color': '#cf1b1b', 'border-color': '#cf1b1b', 'height':'40px', 'margin-top':'20px'};
	const styleB21 = {'width':'250px', 'background-color': '#6a097d', 'border-color': '#6a097d', 'height':'40px', 'margin-top':'20px'};
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
	
	const history = useHistory();
	
  return (
    <>
	{document.body.style.zoom = "80%"}
	<NavbarCO handleShow={handleShow} handleClose={handleClose} />
	{(localStorage.getItem('nws_token') == undefined)?history.push('client-onboarding-login'):''}
	<div className="bg-color">
	<img src={require('../assets/images/co4.jpeg')} alt="bg" style={styleI}/>
	</div>
	<p style={styleO}><h4>Dashboard</h4></p>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<p><b><h5>Welcome, {localStorage.getItem("nws_first_name")} {localStorage.getItem("nws_last_name")} !</h5></b></p>
	
	<p><h8><b>Hope you have a great experience on this platform. If you are visiting it for the first time, please check out our Navigation Guide by clicking the button below.</b></h8></p>
	
  <Button variant="info" size="lg" block style={styleB21}>
			<h6><a href="/client-onboarding"><font color="white">Go To Navigation Guide</font></a></h6>
          </Button>
	</Container>
	<br></br>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<p><b><h5>Saved Projects</h5></b></p>
	
  <SavedProjectsTable></SavedProjectsTable>
  <Button variant="info" size="lg" block style={styleB}>
			<h6><a href="/client-onboarding"><font color="white">+ Create New Project</font></a></h6>
          </Button>
	</Container>
	
    </>
  );
}
export default ClientOnboardingSavedProjects;
