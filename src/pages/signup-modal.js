import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function SignupModal(props) {
  return (
    <Modal
      dialogClassName="signup"
      centered
      show={props.signUpShow}
      onHide={() => props.handleClose("signUp")}
    >
      <Modal.Body>
        <div className="modal-head">
          {/* <span className="fa fa-times close-icon" /> */}
          <h4 className="text-center">Create An Account</h4>
        </div>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder=" " />
          </Form.Group>
          <p className="terms-text">
            By signing up you accept our <a href="#">Terms of Use</a>
          </p>
          <Button variant="info" size="lg" block>
            Sign Up
          </Button>
        </Form>

        <div className="other-option">
          <span>OR</span>
        </div>

        <ul className="social-links">
          <li className="facebook">
            <i className="fa fa-facebook" />
            Signup with facebook
          </li>
          <li className="twitter">
            <i className="fa fa-google-plus" />
            Signup with Google+
          </li>
        </ul>

        <p className="text-center">
          Already have an account?
          <a
            href="#"
            onClick={() => {
              props.handleClose("signUp");
              props.handleShow("signIn");
            }}
            style={{ paddingLeft: 5 }}
          >
            Click Here
          </a>
        </p>
      </Modal.Body>
    </Modal>
  );
}
