import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../assets/images/kp.jpg";
import TGPhoto from "../assets/images/tg.jpg";
import VKRPhoto from "../assets/images/vkr.jpg";
import ACCPhoto from "../assets/images/accai.jpg";

function ContactUsCV() {
	
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  //const styleD = {margin: '40px 100px 80px 40px', 'position':'absolute', display: 'inline-block'};
  const styleD = {margin: '60px 80px 0px 30px', float:'left'};
  const styleH = {height: '350px'};
  const styleO = {color: '#ff5200',margin: '40px 0px 10px 550px'};
  const styleN = {color: '#57007e',margin: '30px 0px 0px 20px', 'font-size':'25px'};
  const styleP = {color: 'black',margin: '0px 0px 0px 20px', 'font-size':'15px'};
  const styleI = {width:'200px', height:'15px', margin: '10px 0px 0px 20px'};
  const styleC = {margin: '0px 0px 450px 20px'};

  return (
  <div style={styleC}>
  <h1 style={styleO}>Meet Our Team</h1>
	<div style={styleD}>
		<ReactRoundedImage image={TGPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		Tanushree Guha
		</div>
		<div style={styleP}>
		<b>Managing Director, Human Capital Analytics</b>
		</div>
		<img
          src={require('../assets/images/accai.png')}
          alt="Second slide"
		  style={styleI}
        />
		
	</div>
	<div style={styleD}>
		<ReactRoundedImage image={VKRPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		Vikas Rana
		</div>
		<div style={styleP}>
		<b>Data Science Manager, Human Capital Analytics</b>
		</div>
			<img
          src={require('../assets/images/accai.png')}
          alt="Second slide"
		  style={styleI}
        />
		
	</div>
	<div style={styleD}>
		<ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
		<div style={styleN}>
		Karthik Prabhu
		</div>
		<div style={styleP}>
		<b>Data Science Analyst, Human Capital Analytics</b>
		</div>
		<img
          src={require('../assets/images/accai.png')}
          alt="Second slide"
		  style={styleI}
        />
		
	</div>
	
	</div>
  );
}

export default ContactUsCV;
