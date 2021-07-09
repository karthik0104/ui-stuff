import React from "react";
import Rating from "./rating";

function ReviewCard() {
  return (
    <div className="review-slide">
      <img
        className="user-image"
        src="https://via.placeholder.com/150"
        alt=""
      />
      <div className="user-review">
        <h6 className="user-name">Frank Klin</h6>
        <div className="rating-wrapper">
          <Rating rate={4} />
        </div>
        <i className="fa fa-quote-left red" aria-hidden="true"></i>
        <p className="review-text">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;