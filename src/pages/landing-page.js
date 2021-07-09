import React from "react";
import ControlledCarousel from "../components/carousel";
import FeatureSection from "../components/feature-section";
import GetStartedSection from "../components/getstarted";
import ReviewSection from "../components/review-section";
import TrendingSection from "../components/tranding-category";
import Footer from "../components/footer";

function LandingPage() {
  return (
    <>
      <ControlledCarousel />
      <FeatureSection />
      <GetStartedSection />
      <ReviewSection />
      <TrendingSection />
      <Footer />
    </>
  );
}
export default LandingPage;
