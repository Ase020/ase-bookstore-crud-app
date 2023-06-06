import { Link } from "react-router-dom";

import "./bookLayout.scss";

// eslint-disable-next-line react/prop-types
const BookLayout = ({ id, title, author, image, price }) => {
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
        <span className="rating">9.2</span>
      </div>
    </Link>
  );
};

export default BookLayout;
