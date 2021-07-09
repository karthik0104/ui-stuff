import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../assets/images/kp.jpg";
import TGPhoto from "../assets/images/khedon_1.jpeg";
import VKRPhoto from "../assets/images/lightblue_1.jpeg";
import DarkBluePhoto from "../assets/images/darkblue_1.jpeg";
import ACCPhoto from "../assets/images/khedon_3.jpg";
import ACC2Photo from "../assets/images/khedon_4.jpg";
import ACC3Photo from "../assets/images/khedon_5.jpg";
import PNPhoto from "../assets/images/purple_necklace.jpeg";
import WHPhoto from "../assets/images/wall_hanging.jpeg";
import EPhoto from "../assets/images/envelopes.jpeg";
import FPhoto from "../assets/images/flowers.jpeg";
import SPhoto from "../assets/images/srikrishna.jpeg";
import PPhoto from "../assets/images/peacock.jpeg";
import BangleRedPhoto from "../assets/images/khedon_bangles_1.jpeg";
import BangleGreenPhoto from "../assets/images/khedon_bangles_3.jpeg";

import ConfigurationModalOwn from "../pages/configuration-modal-own-2";
import ConfirmationModalOwn from "../pages/confirmation-modal-own";
import ImageModalOwn from "../pages/image-modal-own";

function ContactUsOwn1() {
	
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  //const styleD = {margin: '40px 100px 80px 40px', 'position':'absolute', display: 'inline-block'};
  const styleD = {margin: '60px 80px 0px 30px', float:'left'};
  const styleH = {height: '350px'};
  const styleO = {color: '#ff5200',margin: '30px 0px 0px 620px'};
  const styleM = {color: '#57007e',margin: '-10px 0px 10px 40px', 'font-size':'13px', 'color':'green'};
  const styleN = {color: '#57007e',margin: '20px 0px 10px 40px', 'font-size':'16px'};
  const styleP = {color: 'black',margin: '0px 0px 0px 20px', 'font-size':'15px'};
  const styleI = {width:'200px', height:'15px', margin: '10px 0px 0px 20px'};
  const styleC = {margin: '0px 0px -50px -60px'};
  
  const styleB = {'background-color': '#b52b65', 'border-color': '#b52b65', 'height':'40px', 'width':'200px', 'margin-bottom':'70px'};
  const styleB2 = {'background-color': '#0f4c75', 'border-color': '#0f4c75', 'height':'40px', 'width':'200px', 'margin-bottom':'10px'};
  
  const [configParamShow, setConfigParamShow] = React.useState(false);
  const [confirmParamShow, setConfirmParamShow] = React.useState(false);
  const [imageShow, setImageShow] = React.useState(false);
  const [itemName, setItemName] = React.useState('');
  const [imageName, setImageName] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  
  const handleShow = (type,component, colors, price) => {
    if (type === "signIn") {
      //setSignInShow(true);
    } else if (type === "signUp") {
      //setSignUpShow(true);
    } else if (type === "completeProfile") {
      //setCompleteProfileShow(true);
    } else if (type === "configParam") {
		setConfigParamShow(true);
		setItemName(component);
		setColors(colors);
		setPrice(price);
	}
	else if (type === "confirmParam") {
		setConfirmParamShow(true);
	}
	else if (type === "image") {
		setImageName(component);
		setImageShow(true);
	}
  };
  
  const handleClose = (type) => {
    if (type === "signIn") {
      //setSignInShow(false);
	  
    } else if (type === "signUp") {
      //setSignUpShow(false);
    } else if (type === "completeProfile") {
      //setCompleteProfileShow(false);
    } else if (type === "configParam") {
		setConfigParamShow(false);
		//setSignInShow(true);
	}
	else if (type === "confirmParam") {
		setConfirmParamShow(false);
	}
	else if (type === "image") {
		setImageShow(false);
	}

  };

  return (
  
  <div style={styleC}>
  
  <h1 style={styleO}>Articles</h1>
  <Carousel autoPlay={false}>
  <Carousel.Item>
  <div style={{'margin-left':'200px'}}>
	<div style={styleD}>
		<ReactRoundedImage image={WHPhoto} roundedSize="0" imageWidth="200" imageHeight="200"/>
		<div style={styleN}>
		<b>Wall Hanging</b>
		</div>
		<div style={styleM}>
		<b>Rs. 15,000 (Flat 50% Discount)</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['wall_hanging.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Wall Hanging', [['Red',true, 'In-stock'], ['Blue',false,'In-stock']], 1000)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={EPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Gift Envelopes</b>
		</div>
		<div style={styleM}>
		<b>Rs. 25,000</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['envelopes.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Envelopes', [['Red',true, 'In-stock'], ['Blue',false,'In-stock']])}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	
	<div style={styleD}>
		<ReactRoundedImage image={FPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Organza Rose Flowers</b>
		</div>
		<div style={styleM}>
		<b>Rs. 25,000</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['flowers.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Organza Rose Flowers', [['Red',true, 'In-stock'], ['Blue',false,'In-stock']])}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	</div>
	</Carousel.Item>
	
  <Carousel.Item>
	<div style={{'margin-left':'170px'}}>
	<div style={styleD}>
		<ReactRoundedImage image={SPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Radha-Krishna Painting</b>
		</div>
		<div style={styleM}>
		<b>Rs. 10,999</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['srikrishna.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Radha-Krishna Painting')}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={PPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Peacock Painting</b>
		</div>
		<div style={styleM}>
		<b>Rs. 10,999</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['peacock.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Peacock Painting')}><font size="3"><center>Order Now</center></font></Button>
		</div>
		</div>
		
		
	</div>
	</Carousel.Item>
	
	</Carousel>
	
	<ConfigurationModalOwn
        configParamShow={configParamShow}
		handleClose={handleClose}
        handleShow={handleShow}
		itemName={itemName}
		colors={colors}
		price={price}
      />
	 
	<ConfirmationModalOwn
        confirmParamShow={confirmParamShow}
		handleClose={handleClose}
        handleShow={handleShow}
      />
	 
	 <ImageModalOwn
        imageShow={imageShow}
		handleClose={handleClose}
        handleShow={handleShow}
		imageName={imageName}
      />

	
	</div>
	
	
  );
}

export default ContactUsOwn1;
