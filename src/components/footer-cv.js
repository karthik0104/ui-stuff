import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/blog">Career</a>
              </li>
              <li>
                <a href="http://localhost:5344/contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul>
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a href="/how">How It Works</a>
              </li>
              <li>
                <a href="/terms">Terms &amp; Condition</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <ul>
              <li>
                <a href="/terms">Our Team</a>
              </li>

              <li>
                <a href="/terms">Our Journey</a>
              </li>
              <li>
                <a href="/terms">About Us</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 mb-0 text-center">
          <Col>
            <ul className="social-links">
              <li className="facebook">
                <a href="/terms">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="/terms">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="linkedin">
                <a href="/terms">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="google">
                <a href="/terms">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
