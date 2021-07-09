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
import  { Redirect, useHistory } from 'react-router-dom'


import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Spinner, Accordion } from "react-bootstrap";


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

function ClientOnboarding() {
	 const [state, setState] = React.useState({
    social_distancing: false,
	mask_recognition: false,
    emotion_detection: false
  });
  
  const [logs, setLogs] = React.useState('');
  
  	const [signInShow, setSignInShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [completeProfileShow, setCompleteProfileShow] = useState(false);
  const [configParamShow, setConfigParamShow] = useState(false);
  const [styleUsername, setStyleUsername] = useState({'color':'red', 'margin-bottom':'10px', 'margin-left':'200px', 'display':'none'});
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [saving, setSaving] = useState(false);
  
  const handleClose = type => {
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
  
  const changeUsername = (e) => {
		setUsername(e.target.value);
	}

  const changePassword = (e) => {
		setPassword(e.target.value);
	}
  
  const history = useHistory();
  
  const login = type => {
	let request_map = {'username':username, 'password':password}
	setStyleUsername({'color':'red', 'margin-bottom':'10px', 'margin-left':'200px', 'display':'none'});
	setSaving(true);
	axios({
	method: 'post',
	url: 'http://10.166.90.51:8102/login',
	"headers": {
        "content-type": "application/json"
	},
	data: request_map
	}).then(result => 
	//handleSavedResult()
	saveToken(result)
	).catch(err => 
		setChange()
	);
  }
  
  const setChange = () => {
	  setSaving(false);
	  setStyleUsername({'color':'red', 'margin-bottom':'10px', 'margin-left':'200px'})
  }
  
  const saveToken = result => {
	  setSaving(false);
	console.log(result.data.error);
	console.log('token::');
	console.log(result.data['token']);
	
	if (result.data.status == 1) {
		localStorage.setItem('nws_token', result.data.token);
		localStorage.setItem('nws_first_name', result.data.first_name);
		localStorage.setItem('nws_last_name', result.data.last_name);
		
		setStyleUsername({'color':'red', 'margin-bottom':'10px', 'margin-left':'200px', 'display':'none'});
		history.push('/client-onboarding-saved-projects');
	} else {
		console.log('Hey!!!!');
		console.log(result.data.error);
		setStyleUsername({'color':'red', 'margin-bottom':'10px', 'margin-left':'200px'});
	}
  }
  
  const handleShow = type => {
    if (type === "signIn") {
      setSignInShow(true);
    } else if (type === "signUp") {
      setSignUpShow(true);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(true);
    } else if (type === "configParam") {
		setConfigParamShow(true);
	}
  };
  
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5344/modules",
      "headers": {
        "content-type": "application/json",
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])	


  
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
    setState(s => ({ ...s, [target.name]: !s[target.name] }));
	console.log('Toggle called...!');
	
	
	const styleH = {width: '445px', height: '240px', overflow: 'hidden'};
	const styleO = {color: '#ffffff',margin: '30px 30px 20px 200px'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'400px', 'background-color': '#00587a', 'border-color': '#00587a', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
	const styleM = {'margin':'auto', 'alignItems':'center', 'justifyContent':'center'};
	const styleB3 = {'width':'300px', 'background-color': '#232931', 'border-color': '#4a266a', 'height':'40px', 'margin-top':'10px', 'margin':'auto'};
	const styleB2 = {'width':'200px', 'background-color': '#ce0f3d', 'border-color': '#ce0f3d', 'height':'40px'};
	const styleCTE = {'height':'100px'}
	const styleT = {'width': '1000px', 'height':'50px', 'tab-color': '#ff414d', 'margin': '0px 0px 20px 0px'}
	const styleP = {'background-color':'lightgrey', 'color':'black', 'border-color':'lightgrey'}
	const styleCONT = {'border': 'solid', 'border-width': '2px', 'width':'40%', 'padding': '20px', 'border-radius':'25px', 'border-color': '#00587a', 'background-color': 'rgba(255,255,255,0.9)', 'margin':'auto', 'margin-top':'100px'}
	const styleL = {'float':'left', 'width':'50%'}
	const styleR = {'float':'right'}
	const styleTEXT = {'width':'400px', 'border-color':'blue', 'margin':'auto'}
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
	<div className="bg-color">
	<img src={require('../assets/images/co5.jpg')} alt="bg" style={styleI}/>
	</div>
	<div>
	<p style={styleO}><h4></h4></p>
	<Container className="themed-container" fluid={true} style={styleCONT}>
	<div style={styleM}>
	<br></br>
	<p><center><b><h5>Enter Username</h5></b></center></p>
	</div>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
      placeholder=""
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
	  value={username}
	  onChange={changeUsername}
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  <br></br>
  <p><center><b><h5>Enter Password</h5></b></center></p>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
	type="password"
      placeholder=""
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
	  value={password}
	  onChange={changePassword}
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  {saving?<Spinner animation="border" role="status" style={{'margin-left':'300px', 'margin-top':'30px', 'margin-bottom':'0px'}}><span className="sr-only">Loading...</span></Spinner>:''}
	<div style={styleUsername}><b>Incorrect Username Or Password !</b></div>
 <div style={styleS3}>
<hr></hr>
<br></br>
<Button variant="info" size="lg" block style={styleB} onClick={() => login()}>
			<h6>Login Into NWS COI</h6>
          </Button>
		  </div>
</Container>

</div>
<ConfigurationModal
        configParamShow={configParamShow}
		handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}
export default ClientOnboarding;
