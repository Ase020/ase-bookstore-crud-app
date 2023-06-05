import "./home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookLayout } from "../../components";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Home = () => {
  const fakeData = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
  ];
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
        {fakeData.map((data, i) => (
          <BookLayout key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
