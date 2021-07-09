import React from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionOwn from "../components/feature-section-own";
import GetStartedSectionOwnArticles from "../components/getstarted-own-articles";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterOwn from "../components/footer-own";
import ContactUsOwn1 from "../components/contactus-own-1";
import ContactUsOwn2 from "../components/contactus-own-2";
import NavbarOwn from "../components/navbar-own";
import ControlledCarouselOwn from "../components/carousel-own";
import { Button, Carousel } from "react-bootstrap";

function LandingPageOwn() {
	const styleB = {'background-color': '#0f4c75', 'border-color': '#0f4c75', 'height':'40px', 'width':'400px', 'margin': '-30px 10px 30px 450px'};
	window.scrollTo(0, 0);
	
  return (
    <>
	<NavbarOwn />
      
	  <ContactUsOwn1 />
	  <hr></hr>
	  <br></br>
      <FooterOwn />
    </>
  );
}
export default LandingPageOwn;
