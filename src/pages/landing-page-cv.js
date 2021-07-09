import React from "react";
import ControlledCarouselCV from "../components/carousel-cv";
import FeatureSectionCV from "../components/feature-section-cv";
import GetStartedSectionCV from "../components/getstarted-cv";
import ReviewSectionCV from "../components/review-section-cv";
import TrendingSectionCV from "../components/tranding-category-cv";
import FooterCV from "../components/footer-cv";
import ContactUsCV from "../components/contactus-cv";

function LandingPageCV() {
  return (
    <>
      <ControlledCarouselCV />
      <FeatureSectionCV />
      <GetStartedSectionCV />
	  <ContactUsCV />
      <FooterCV />
    </>
  );
}
export default LandingPageCV;
