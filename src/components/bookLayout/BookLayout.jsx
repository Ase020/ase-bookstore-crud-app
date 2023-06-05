import { Link } from "react-router-dom";

import "./bookLayout.scss";

const BookLayout = () => {
  return (
    <Link to="/books/1">
      <div className="book-container">
        <img
          src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <h4 className="book-title">Eloquent Javascript</h4>
        <i className="author">Felix Nyalenda</i>
        <p className="price">
          Ksh. <em>1,200</em>
        </p>
        <span className="rating">9.2</span>
      </div>
    </Link>
  );
};

export default BookLayout;
