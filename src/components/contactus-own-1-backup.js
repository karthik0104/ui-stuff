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
import CBPhoto from "../assets/images/khedon_1.jpeg";
import RSTBPhoto from "../assets/images/khedon_bangles_1.jpeg";
import GSTBPhoto from "../assets/images/khedon_bangles_3.jpeg";
import LBPhoto from "../assets/images/lightblue_1.jpeg";
import DBPhoto from "../assets/images/darkblue_1.jpeg";
import CBNPhoto from "../assets/images/khedon_4.jpg";
import CNPhoto from "../assets/images/purple_necklace.jpeg";
import BangleRedPhoto from "../assets/images/khedon_bangles_1.jpeg";
import BangleGreenPhoto from "../assets/images/khedon_bangles_3.jpeg";

import ConfigurationModalOwn from "../pages/configuration-modal-own";
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
  const [price, setPrice] = React.useState(1);
  const [qts, setQts] = React.useState({});
  
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
		setQts({});
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
		setPrice(0);
		setQts({});
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
  
  <h1 style={styleO}>Jewellery</h1>
  <Carousel autoPlay={false}>
  <Carousel.Item>
  <div style={{'margin-left':'200px'}}>
	<div style={styleD}>
		<ReactRoundedImage image={CBPhoto} roundedSize="0" imageWidth="200" imageHeight="200"/>
		<div style={styleN}>
		<b>Crystal Bracelets</b>
		</div>
		<div style={styleM}>
		<b>Rs. 15,000 (Flat 50% Discount)</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['khedon_1.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Crystal Bracelets', [['Red',true, 'In-stock'], ['Blue',false,'In-stock']], 100)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={RSTBPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Silk Thread Bangles</b>
		</div>
		<div style={styleM}>
		<b>Rs. 85</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['khedon_bangles_1.jpeg', 'khedon_bangles_2.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Silk Thread Bangles', [['Maroon',true, 'In-stock'], ['Blue',false,'Currently not in stock']], 85)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	
	<div style={styleD}>
		<ReactRoundedImage image={GSTBPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Silk Thread Bangles</b>
		</div>
		<div style={styleM}>
		<b>Rs. 95</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['khedon_bangles_3.jpeg', 'khedon_bangles_4.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Silk Thread Bangles', [['Green',true, 'In stock'], ['Blue',false,'Currently not in stock']], 95)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	</div>
	</Carousel.Item>
	
	<Carousel.Item>
  <div style={{'margin-left':'200px'}}>
	<div style={styleD}>
		<ReactRoundedImage image={LBPhoto} roundedSize="0" imageWidth="200" imageHeight="200"/>
		<div style={styleN}>
		<b>Silk Thread Bangles</b>
		</div>
		<div style={styleM}>
		<b>Rs. 95</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['lightblue_1.jpeg', 'lightblue_2.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Silk Thread Bangles', [['Light Blue',true, 'In stock'], ['Green',false,'Currently not in stock']], 95)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={DBPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Silk Thread Bangles</b>
		</div>
		<div style={styleM}>
		<b>Rs. 85</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['darkblue_1.jpeg', 'darkblue_2.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Silk Thread Bangles', [['Dark Blue',true, 'In stock'], ['Green',false,'Currently not in stock']], 85)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	
	<div style={styleD}>
		<ReactRoundedImage image={CBNPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Crystal-Bead Necklace</b>
		</div>
		<div style={styleM}>
		<b>Rs. 110</b>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['khedon_4.jpg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Crystal-Bead Necklace', [['Red',true, 'In stock'], ['Blue',false,'Currently not in stock']], 110)}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	</div>
	</Carousel.Item>
	
	<Carousel.Item>
  <div style={{'margin-left':'200px'}}>
	<div style={styleD}>
		<ReactRoundedImage image={CNPhoto} roundedSize="0" imageWidth="200" imageHeight="200"/>
		<div style={styleN}>
		<b>Crystal Necklace</b>
		</div>
		<div style={styleM}>
		<b>Rs. 100</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB2} onClick={() => handleShow('image', ['purple_necklace.jpeg'])}><font size="3"><center>View All Images</center></font></Button>
		</div>
		
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB} onClick={() => handleShow('configParam', 'Crystal Necklace', [['Purple',true, 'In stock'], ['Blue',false,'Currently not in stock']], 100)}><font size="3"><center>Order Now</center></font></Button>
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
		qts={qts}
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
