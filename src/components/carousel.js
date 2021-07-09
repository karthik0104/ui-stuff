import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    //setDirection(e.direction);
  };
  
  const styleH = {height: '270px'};

  return (
  <div>
    <Carousel id="hero-slider" controls={false} activeIndex={index} direction={direction} onSelect={handleSelect} style={styleH}>
      <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/slide1.jpg')}
          alt="First slide"
          style={styleH}
        />
         <Carousel.Caption>
      <h2>Need help with your homework ?</h2>
      <h6> Find experts who can help you out !</h6>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
	  <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src={require('../assets/images/slide1.jpg')}
          alt="First slide"
          style={styleH}
        />
         <Carousel.Caption>
      <h2>Want to learn a course ?</h2>
      <h6> Find dedicated tutors to coach you !</h6>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={styleH}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/850x300"
          alt="Second slide"
          style={styleH}
        />
        <Carousel.Caption>
      <h2>Love to teach ?</h2>
      <h6>Join us as a tutor and teach away !</h6>
	  <Button className="trial" variant="primary" size="lg">Get Started</Button>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;
