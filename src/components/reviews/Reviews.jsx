/* eslint-disable react/prop-types */
import "./reviews.scss";

const Reviews = ({ review }) => {
  const { rating, user, comment } = review;

  return (
    <div className="review-container">
      <span className="rate">⭐ {rating}</span>
      <span className="user">
        {user?.name} <span>says:</span>
      </span>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Reviews;
