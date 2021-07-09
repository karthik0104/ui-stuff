import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function SigninModal(props) {
  return (
    <Modal
      dialogClassName="signup"
      centered
      show={props.signInShow}
      onHide={() => props.handleClose("signIn")}
    >
      <Modal.Body>
        <div className="modal-head">
          {/* <span className="fa fa-times close-icon" /> */}
          <h4 className="text-center">Login into An Account</h4>
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
          <Button variant="info" size="lg" block>
            Sign In
          </Button>
        </Form>

        <div className="other-option">
          <span>OR</span>
        </div>

        <ul className="social-links">
          <li className="facebook">
            <i className="fa fa-facebook" />
            Signin with facebook
          </li>
          <li className="twitter">
            <i className="fa fa-google-plus" />
            Signin with Google+
          </li>
        </ul>

        <p className="text-center">
          Don't have an account?
          <a
            href="#"
            onClick={() => {
              props.handleClose("signIn");
              props.handleShow("signUp");
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
