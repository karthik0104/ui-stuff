import React from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionOwn from "../components/feature-section-own";
import GetStartedSectionOwn from "../components/getstarted-own";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterOwn from "../components/footer-own";
import ContactUsOwn from "../components/contactus-own-1";
import NavbarOwn from "../components/navbar-own";
import ControlledCarouselOwn from "../components/carousel-own";
import { Button, Carousel } from "react-bootstrap";
import  { Redirect, useHistory } from 'react-router-dom'

function LandingPageOwn() {
	const styleB = {'background-color': '#0f4c75', 'border-color': '#0f4c75', 'height':'40px', 'width':'400px', 'margin': '-30px 10px 30px 450px'};
	
	const history = useHistory();
	
	const more = () => {
		history.push('/articles');
	}
	
  return (
    <>
	<NavbarOwn />
      <ControlledCarouselOwn />
      <FeatureSectionOwn />
	  <ContactUsOwn />
	  <br></br>
	  <br></br>
	  <br></br>
	  <Button variant="primary" size="lg" style={styleB} onClick={() => more()}><font size="3"><center>View More Articles</center></font></Button>
	  <GetStartedSectionOwn />
	  <br></br>
      <FooterOwn />
    </>
  );
}
export default LandingPageOwn;
