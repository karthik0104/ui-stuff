import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CompleteProfileModal(props) {
  return (
    <Modal
      dialogClassName="completeprofile"
      centered
      show={props.completeProfileShow}
      onHide={() => props.handleClose("completeProfile")}
    >
      <Modal.Header closeButton>
        <Modal.Title>Complete profile heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
}
