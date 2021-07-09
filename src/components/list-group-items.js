import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Card } from "react-bootstrap";

export default function ListGroupItems(props) {
  return (
    <ListGroupItem>
      <Card.Text className="card-text-title">{props.title}</Card.Text>
      <Card.Text className="card-text-value">{props.value}</Card.Text>
    </ListGroupItem>
  );
}

ListGroupItems.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
};
