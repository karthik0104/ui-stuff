import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import  { Redirect, useHistory } from 'react-router-dom'

function ControlledCarouselOwn() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  const styleH = {height: '350px'};
  const styleO = {color: '#000000',margin: '0px 0px 40px 0px'};
  
  const history = useHistory();
	
	const more = () => {
		history.push('/articles');
	}

  return (
  <div id="caritems">
    <Carousel id="hero-slider" controls={false} activeIndex={index} direction={direction} onSelect={handleSelect} style={styleH} interval="2000">
	<Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/own_1.jpg')}
          alt="Second slide"
          style={styleH}
        />
        <Carousel.Caption>
      
	  <Button className="trial" variant="primary" size="lg" onClick={() => more()}>Explore Now</Button>
    </Carousel.Caption>
      </Carousel.Item>
	  
	  <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/own_2.jpg')}
          alt="Second slide"
          style={styleH}
        />
        <Carousel.Caption>
      
	  <Button className="trial" variant="primary" size="lg" onClick={() => more()}>Explore Now</Button>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarouselOwn;
