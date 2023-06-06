import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./book.scss";
import { Reviews } from "../../components";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Book = () => {
  const [showAllDesc, setShowAllDesc] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const toggle = () => {
    setShowAllDesc((prev) => !prev);
  };

  const description = book.synopsis
    ? book.synopsis
    : `Why does it feel like no matter what happens in American politics,
  the Democrats still get their way? When he left Congress in 2017,
  Jason Chaffetz still thought elections could save us. For
  generations, conservatives have hoped that freedom-loving
  congressional majorities could turn back the tide and restore
  America’s liberties and prosperity. But now, he says, winning
  elections will not be enough.`;

  const displayedText = showAllDesc
    ? description
    : description.slice(0, 200) + "...";

  // calculate average ratings
  const ratingsArray = book.reviews?.map((review) => review.rating);
  const sum = ratingsArray?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const averageRating = (sum / ratingsArray?.length).toFixed(1);

  return (
    <div className="book">
      <div className="image-wrapper" data-aos="fade-right">
        <img src={book.image} alt={book.title} />
        <span className="rating">
          {book?.reviews?.length > 0 ? averageRating : "0.0"}
        </span>
      </div>

      <div className="book-details-container" data-aos="fade-left">
        <div className="details-intro">
          <p className="intro">Books Details</p>

          <div className="buttons-wrapper">
            <Link to="/books/1/edit?">
              <button className="edit">Edit</button>
            </Link>
            <button className="delete">Delete</button>
          </div>
        </div>

        <div className="book-details">
          <h1 className="title">{book.title}</h1>
          <p className="genre">{book.genre}</p>
          <p className="price">
            Ksh.{" "}
            <span>
              {Math.floor(book.price * 120).toLocaleString("en-KE", {
                style: "currency",
                currency: "KES",
              })}
            </span>
          </p>

          <p className="desc">{displayedText}</p>
          {showAllDesc ? (
            <button className="show-less" onClick={toggle}>
              show less
            </button>
          ) : (
            <button className="show-less" onClick={toggle}>
              show more
            </button>
          )}

          <div className="reviews">
            <h4>Reviews</h4>
            {book.reviews?.length > 0 ? (
              book.reviews?.map((review) => (
                <Reviews key={review.id} review={review} />
              ))
            ) : (
              <p className="no-reviews">Not yet reviewed!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
