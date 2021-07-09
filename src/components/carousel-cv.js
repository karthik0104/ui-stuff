import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";

function ControlledCarouselCV() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  const styleH = {height: '350px'};
  const styleO = {color: '#ffd800',margin: '0px 0px 40px 0px'};

  return (
  <div id="caritems">
    <Carousel id="hero-slider" controls={false} activeIndex={index} direction={direction} onSelect={handleSelect} style={styleH} interval="2000">
	<Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/digeye3.jpg')}
          alt="Second slide"
          style={styleH}
        />
        <Carousel.Caption>
      <h2 style={styleO}>Dedicated & Customized Analytics Solutions For Your Workplace</h2>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
	  <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/digeye2.jpg')}
          alt="First slide"
          style={styleH}
        />
         <Carousel.Caption>
      <h2 style={styleO}>We know you care about your employees. So do we.</h2>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
	  <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/digeye.jpg')}
          alt="First slide"
          style={styleH}
        />
         <Carousel.Caption>
      <h2 style={styleO}>One-stop shop for Computer Vision apps, at your fingertips</h2>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarouselCV;
