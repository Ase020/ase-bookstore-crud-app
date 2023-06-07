import "./home.scss";
import { BookLayout, Loading } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [books.length]);

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

      {loading ? (
        <Loading />
      ) : (
        <div className="books-wrapper" data-aos="zoom-in-down">
          {books.map((book) => (
            <BookLayout
              key={book.id}
              id={book.id}
              title={book.title}
              genre={book.genre}
              author={book.author}
              image={book.image}
              price={book.price}
              synopsis={book.synopsis}
              reviews={book.reviews}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
