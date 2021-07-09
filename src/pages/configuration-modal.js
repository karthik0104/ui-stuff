import React from "react";
import Rating from "../components/rating";
import ListGroupItems from "../components/list-group-items";

import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Accordion, ListGroup, Modal } from "react-bootstrap";


export default function ConfigurationModal(props) {
	const [state, setState] = React.useState({});
	const [state2, setState2] = React.useState({});
	const [state3, setState3] = React.useState({'val':props.clientName});
	const [state4, setState4] = React.useState({'val2':props.sftpName});
	
	const [state5, setState5] = React.useState({'val3':props.onet});
	const [state6, setState6] = React.useState({'val4':props.client});
	
	React.useEffect(() => {
      setState3({'val':props.clientName});
	}, [props.clientName])
	
	React.useEffect(() => {
	  setState4({'val2':props.sftpName});
	}, [props.sftpName])
	
	React.useEffect(() => {
      setState5({'val3':props.onet});
	}, [props.onet])
	
	React.useEffect(() => {
	  setState6({'val4':props.client});
	}, [props.client])
	
	const reg = () => {
		props.onRegister(state3.val);
		props.onSftp(state4.val2);
		props.onOnet(state5.val3);
		props.onClient(state6.val4);
		props.handleClose("configParam");
	};
	
	const nameChange = (e) => {
		//setState({name: e.target.value});
		setState3({'val': e.target.value});
		//props.onRegister(state.name);
	}
	
	const sftpChange = (e) => {
		//setState2({sftp: e.target.value});
		setState4({'val2': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const handleToggleOnet = (e) => {
    //setState(s => ({ ...s, [target.name]: !s[target.name] }));
		console.log('Toggle called...!');
		console.log(e.target.value);
		
		if (state5.val3 == true) {
			setState5({'val3':false});
		} else {
			setState5({'val3':true});
		}
	}
	
	const handleToggleClient = (e) => {
    //setState(s => ({ ...s, [target.name]: !s[target.name] }));
		console.log('Toggle called...!');
		console.log(e.target.value);
		
		if (state6.val4 == true) {
			setState6({'val4':false});
		} else {
			setState6({'val4':true});
		}
	}
	
	
		const styleH = {width: '445px', height: '240px', overflow: 'hidden'};
	const styleO = {color: '#000000',margin: '5px 5px 5px 5px', 'align':'center'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'500px', 'background-color': '#00587a', 'border-color': '#00587a', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
	const styleB3 = {'width':'300px', 'background-color': '#232931', 'border-color': '#4a266a', 'height':'40px', 'margin-top':'10px'};
	const styleB2 = {'width':'200px', 'background-color': '#ce0f3d', 'border-color': '#ce0f3d', 'height':'40px'};
	const styleCTE = {'height':'100px'}
	const styleT = {'width': '1000px', 'height':'50px', 'tab-color': '#ff414d', 'margin': '0px 0px 20px 0px'}
	const styleP = {'background-color':'lightgrey', 'color':'black', 'border-color':'lightgrey'}
	const styleCONT = {'border': 'solid', 'border-width': '2px', 'width':'80%', 'padding': '20px', 'border-radius':'0px', 'border-color': '#00587a', 'background-color': 'rgba(255,255,255,0.9)'}
	const styleL = {'float':'left', 'width':'50%'}
	const styleR = {'float':'right'}
	const styleTEXT = {'width':'300px', 'border-color':'blue'}
	const styleS3 = {'margin-top':'50px'}
	const styleI = {'width':'100%'}
	const styleCANVAS = {'width':'20%'}
	const styleAcc1 = {color: '#ffffff'};
	const styleCARDH = {'background-color':'#34495e'};
	const styleOL = {'margin-top': '20px', 'background-color':'black', 'color':'black', 'height': '100px'};
	const styleIT = {'color':'white', 'background-color':'#797a7e'};
	const configure = {'float':'right', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module = {'float':'left', 'margin-bottom':'1px', 'margin-top':'1px'}
	const module2 = {'float':'left', 'clear':'left', 'margin-bottom':'15px', 'margin-top':'1px'}
	
	const confirmParameters = (component_state, component_name, text) => {
		component_state[component_name] = text
  };
	
  return (
    <Modal
      dialogClassName="configParam"
      centered
      show={props.configParamShow}
      onHide={() => props.handleClose("configParam")}
    >
      <Modal.Body>
	<p style={styleO}><h4>Configure {props.componentDisplayName} Component</h4></p>
	<hr></hr>
	<p><b><h8>Schema Name</h8></b></p>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
	  onChange={nameChange}
	  value = {state3.val}
      placeholder="(default) Type to override"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
	<p><b><h8>S3 Folder Name</h8></b></p>
	<InputGroup className="mb-3" style={styleTEXT}>
    <FormControl
	onChange={sftpChange}
	value = {state4.val2}
      placeholder="(default) Type to override"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  
  <br></br>
  <p><b><h8>Data Source</h8></b></p>
	<Form.Check name="onet" type="checkbox" label="O*Net" checked={state5.val3} onChange={handleToggleOnet}/>
  <Form.Check name="client" type="checkbox" label="Client" checked={state6.val4}  onChange={handleToggleClient}/>
	 <div style={styleS3}>
<hr></hr>
<br></br>
<Button variant="info" size="lg" block style={styleB} onClick={reg}>
			<h6>Confirm</h6>
          </Button>
		  </div>
      </Modal.Body>
    </Modal>
  );
}
