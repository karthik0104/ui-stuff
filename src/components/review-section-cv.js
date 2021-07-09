import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import ReviewCard from "./review-card";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        initialSlide: 1,
      }
    }
  ]
};

function ReviewSection() {
  return (
    <div id="review-slider-wrapper">
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReviewSection;
