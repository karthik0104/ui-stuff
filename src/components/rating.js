import React from "react";
import PropTypes from "prop-types";

export default function StarRating(props) {
  const RatingData = [];
  for (let i = 1; i <= 5; i++) {
    RatingData.push(
      <span key={i} className={`fa fa-star ${props.rate >= i ? "checked" : ""}`} />
    );
  }
  return RatingData;
}

StarRating.propTypes = {
  rate: PropTypes.number
};
