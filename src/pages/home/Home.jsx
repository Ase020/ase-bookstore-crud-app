import { Link } from "react-router-dom";

import "./home.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Home = () => {
  return (
    <div className="home">
      <h1 className="title" data-aos="fade-up">
        Welcome to aseBookstore. <br /> Find your read of the day from our rich
        catalog.
      </h1>

      <h3 className="featured" data-aos="fade-up-right">
        Our featured <b>Books</b>
      </h3>

      <ul className="categories" data-aos="fade-left">
        <li>All</li>
        <li>Top Rated</li>
        <li>New Release</li>
      </ul>

      <div className="books-wrapper" data-aos="zoom-in-down">
        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <Link to="/books/1">
          <div className="book-container">
            <img
              src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <h4 className="book-title">Eloquent Javascript</h4>
            <i className="author">Felix Olali</i>
            <p className="price">
              Ksh. <em>1,200</em>
            </p>
            <span className="rating">9.2</span>
          </div>
        </Link>

        <div className="book-container">
          <img
            src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <h4 className="book-title">Eloquent Javascript</h4>
          <i className="author">Felix Olali</i>
          <p className="price">
            Ksh. <em>1,200</em>
          </p>
          <span className="rating">9.2</span>
        </div>
        <div className="book-container">
          <img
            src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <h4 className="book-title">Eloquent Javascript</h4>
          <i className="author">Felix Olali</i>
          <p className="price">
            Ksh. <em>1,200</em>
          </p>
          <span className="rating">9.2</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
