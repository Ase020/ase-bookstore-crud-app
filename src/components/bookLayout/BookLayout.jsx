/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./bookLayout.scss";

// eslint-disable-next-line react/prop-types
const BookLayout = ({ id, title, author, image, price, reviews }) => {
  // calculate average ratings
  const ratingsArray = reviews?.map((review) => review.rating);
  const sum = ratingsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const averageRating = (sum / ratingsArray.length).toFixed(1);

  return (
    <Link to={`/books/${id}`}>
      <div className="book-container">
        <img src={image} alt={title} />
        <h4 className="book-title">{title}</h4>
        <i className="author">{author}</i>
        <p className="price">
          Ksh.{" "}
          <em>
            {Math.floor(price * 120).toLocaleString("en-KE", {
              style: "currency",
              currency: "KES",
            })}
          </em>
        </p>
        <span className="rating">
          {reviews.length > 0 ? averageRating : "0.0"}
        </span>
      </div>
    </Link>
  );
};

export default BookLayout;
