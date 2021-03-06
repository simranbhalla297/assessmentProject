import React from "react";
import ReactStars from "react-rating-stars-component";
export default function Ratings({ rating }) {
  // console.log(rating);

  return (
    <div>
      <ReactStars
        count={5}
        size={24}
        value={rating}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </div>
  );
}
