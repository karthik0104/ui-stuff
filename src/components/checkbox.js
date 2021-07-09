import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Checkbox(props) {
  return (
    <Form.Check>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id={props.id} />
        <label className="custom-control-label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    </Form.Check>
  );
}

Checkbox.propType = {
  label: PropTypes.string,
  id: PropTypes.string
};
