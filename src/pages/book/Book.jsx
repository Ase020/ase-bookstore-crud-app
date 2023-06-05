import { useState } from "react";
import { Link } from "react-router-dom";
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

  const toggle = () => {
    setShowAllDesc((prev) => !prev);
  };

  const fakeData = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  const description = `Why does it feel like no matter what happens in American politics,
  the Democrats still get their way? When he left Congress in 2017,
  Jason Chaffetz still thought elections could save us. For
  generations, conservatives have hoped that freedom-loving
  congressional majorities could turn back the tide and restore
  America’s liberties and prosperity. But now, he says, winning
  elections will not be enough. Increasingly, the work of government
  is being done by people outside the government—unelected power
  brokers who are invisible to the American public but who pull the
  strings, set the agendas, create the incentives, and write the rules
  we must all live by. Using both government and non-governmental
  institutions, leftists have bypassed the legislative process to
  compel institutional compliance with partisan goals. The White House
  or the Congress may change hands, but the left remains in power. In
  The Puppeteers, Chaffetz reveals how: Susan Rice was put in charge
  of using the bureaucracy to make sure Republicans never win another
  election The federal government now could be deployed to harvest
  ballots from Democrats President Biden hired a Blackrock executive
  to run his economic agenda for the first two years of his presidency
  State treasurers planned to use billions of government dollars to
  “address climate change” and “racial inequality,” with almost no way
  for voters to stop them Randi Weingarten makes more decisions for
  the education department than people who actually work there
  Electing the right leaders is no longer enough. To take back our
  country, the American people need to understand that they’re in a
  new fight. But it’s a fight that’s still eminently winnable, and
  Chaffetz reveals the playbook.`;

  const displayedText = showAllDesc
    ? description
    : description.slice(0, 250) + "...";

  return (
    <div className="book">
      <div className="image-wrapper" data-aos="fade-right">
        <img
          src="https://images.pexels.com/photos/16999665/pexels-photo-16999665/free-photo-of-food-people-summer-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span className="rating">9.2</span>
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
          <h1 className="title">Eloquent Javascript</h1>
          <p className="genre">Fiction</p>
          <p className="price">
            Ksh. <span>1,200</span>
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
            {fakeData.map((data, i) => (
              <Reviews key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
