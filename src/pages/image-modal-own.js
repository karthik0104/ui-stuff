import React from "react";
import Rating from "../components/rating";
import ListGroupItems from "../components/list-group-items";
import axios from 'axios';
import ReactRoundedImage from "react-rounded-image";

import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Accordion, ListGroup, Modal, Carousel  } from "react-bootstrap";


export default function ImageModalOwn(props) {
	const [state, setState] = React.useState({});
	const [state2, setState2] = React.useState({});
	const [state3, setState3] = React.useState({'val':props.itemName});
	const [state4, setState4] = React.useState({'val2':props.custName});
	
	const [state5, setState5] = React.useState({'val3':props.email});
	const [state6, setState6] = React.useState({'val4':props.number});
	const [stateA, setStateA] = React.useState({'valA':props.address});
	
	const [state7, setState7] = React.useState({'val5':props.quantity});
	const [state8, setState8] = React.useState({'val6':props.comments});
	
	const [state9, setState9] = React.useState({'val7':props.price});
	
	const [stateI, setStateI] = React.useState({'valI':props.imageName});
	
	React.useEffect(() => {
      setStateI({'valI':props.imageName});
	}, [props.imageName])
	
	React.useEffect(() => {
      setState3({'val':props.itemName});
	}, [props.itemName])
	
	React.useEffect(() => {
	  setState4({'val2':props.custName});
	}, [props.custName])
	
	React.useEffect(() => {
      setState5({'val3':props.email});
	}, [props.email])
	
	React.useEffect(() => {
	  setState6({'val4':props.number});
	}, [props.number])
	
	React.useEffect(() => {
      setState5({'valA':props.address});
	}, [props.address])
	
	React.useEffect(() => {
	  setState7({'val5':props.quantity});
	}, [props.quantity])
	
	React.useEffect(() => {
	  setState8({'val6':props.comments});
	}, [props.comments])
	
	React.useEffect(() => {
	  setState8({'val7':props.price});
	}, [props.price])
	
	const reg = () => {
		/*props.onRegister(state3.val);
		props.onSftp(state4.val2);
		props.onemail(state5.val3);
		props.onnumber(state6.val4);*/
		props.handleClose("confirmParam");
	};
	
	const itemNameChange = (e) => {
		//setState({name: e.target.value});
		setState3({'val': e.target.value});
		//props.onRegister(state.name);
	}
	
	const custNameChange = (e) => {
		//setState2({sftp: e.target.value});
		setState4({'val2': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const emailChange = (e) => {
		//setState({name: e.target.value});
		setState5({'val3': e.target.value});
		//props.onRegister(state.name);
	}
	
	const numberChange = (e) => {
		//setState2({sftp: e.target.value});
		setState6({'val4': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const quantityChange = (e) => {
		//setState2({sftp: e.target.value});
		setState7({'val5': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const commentChange = (e) => {
		//setState2({sftp: e.target.value});
		setState8({'val6': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const addressChange = (e) => {
		//setState2({sftp: e.target.value});
		setStateA({'valA': e.target.value});
		//props.onSftp(state2.sftp);
	}
	
	const handleToggleemail = (e) => {
    //setState(s => ({ ...s, [target.name]: !s[target.name] }));
		console.log('Toggle called...!');
		console.log(e.target.value);
		
		if (state5.val3 == true) {
			setState5({'val3':false});
		} else {
			setState5({'val3':true});
		}
	}
	
	const handleTogglenumber = (e) => {
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
	const styleO = {color: 'orange',margin: '5px 5px 5px 5px', 'align':'center'};
	const styleCG = {width: '95%'}
	const styleC = {'color': 'black', 'background-color':'#f7f7f7', margin: '0px 0px 20px 40px', 'box-shadow': '1px 0px 2px 0px #000000'}
	const styleCT = {'color': '#57007e'}
	const styleB = {'width':'500px', 'background-color': '#fa1616', 'border-color': '#ff4b5c', 'height':'40px', 'margin-top':'50px', 'margin':'auto'};
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
      dialogClassName="image"
      centered
      show={props.imageShow}
      onHide={() => props.handleClose("image")}
    >
      <Modal.Body>
	  <Carousel autoPlay={false}>
	  {!((stateI.valI === '') || (stateI.valI === undefined) || (stateI.valI.length == 0) || (stateI.valI === 'undefined')) && stateI.valI.map((image1, index) => (
	  <Carousel.Item>
	  <center>
	  <img src={require("../assets/images/"+stateI.valI[index])} height="490px" width="460px"></img>
		</center>
		</Carousel.Item>))}
		</Carousel>
      </Modal.Body>
    </Modal>
  );
}
