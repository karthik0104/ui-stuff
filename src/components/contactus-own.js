import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../assets/images/kp.jpg";
import TGPhoto from "../assets/images/khedon_1.jpeg";
import VKRPhoto from "../assets/images/khedon_2.jpg";
import ACCPhoto from "../assets/images/khedon_3.jpg";
import ACC2Photo from "../assets/images/khedon_4.jpg";
import ACC3Photo from "../assets/images/khedon_5.jpg";

function ContactUsOwn() {
	
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  //const styleD = {margin: '40px 100px 80px 40px', 'position':'absolute', display: 'inline-block'};
  const styleD = {margin: '60px 40px 0px 30px', float:'left'};
  const styleMAIN = {margin: '0px 0px 0px 30px'};
  const styleH = {height: '350px'};
  const styleO = {color: '#ff5200',margin: '30px 0px 5px 500px'};
  const styleM = {color: '#57007e',margin: '-10px 0px 10px 40px', 'font-size':'13px', 'color':'green'};
  const styleN = {color: '#57007e',margin: '50px 0px 10px 40px', 'font-size':'15px'};
  const styleP = {color: 'black',margin: '0px 0px 0px 20px', 'font-size':'15px'};
  const styleI = {width:'200px', height:'15px', margin: '10px 0px 0px 20px'};
  const styleC = {margin: '0px 0px 450px 20px'};
  
  const styleB = {'background-color': '#b52b65', 'border-color': '#b52b65', 'height':'40px', 'width':'200px', 'margin-bottom':'70px'};

  return (
  
  <div style={styleC}>
  <h1 style={styleO}>Featured Articles</h1>
  <div style={styleMAIN}>
	<div style={styleD}>
		<ReactRoundedImage image={TGPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Crystal Bracelets</b>
		</div>
		<div style={styleM}>
		<b>Rs. 15,000 (Flat 50% Discount)</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={VKRPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Silk-Thread Bangles</b>
		</div>
		<div style={styleM}>
		<b>Rs. 25,000</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB}><font size="3"><center>Order Now</center></font></Button>
		</div>
		
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={ACC3Photo} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Stone Pendants</b>
		</div>
		<div style={styleM}>
		<b>Rs. 45,549</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB}><font size="3"><center>Order Now</center></font></Button>
		</div>
	</div>
	
	<div style={styleD}>
		<ReactRoundedImage image={ACC2Photo} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		<b>Red Crystal-Bead Necklace</b>
		</div>
		<div style={styleM}>
		<b>Rs. 10,999</b>
		</div>
		<div style={styleP}>
		<Button variant="primary" size="lg" style={styleB}><font size="3"><center>Order Now</center></font></Button>
		</div>
		</div>
	</div>
	</div>
	
	
  );
}

export default ContactUsOwn;
