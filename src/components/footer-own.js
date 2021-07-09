import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	const contact = {'color':'white', 'float':'left'};
	const arr = {'color':'white', 'float':'right'};
	
  return (
    <div className="footer">
      <Container>
        <div style={contact}><b><u>Contact: </u></b>
		<p></p>
		<p>Phone Number: +91-75882-32612</p>
		<p>Address: Mahadevapura, Bangalore-560048</p>
		<p>Email: kraftkorner@gmail.com</p>
		</div>
		
		<div style={arr}>
		All Rights Reserved,
		<p><font size="7" face="Showcard Gothic"><font color="red">K</font><font color="lightgreen">R</font><font color="yellow">A</font><font color="skyblue">F</font><font color="orange">T</font> <font color="#e11d74"><i>Korner</i></font></font></p>
		</div>
		
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
