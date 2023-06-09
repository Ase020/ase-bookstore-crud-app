import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

import "./add.scss";

const Add = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookObj = {
      title: e.target[0].value,
      author: e.target[1].value,
      genre: e.target[2].value,
      image: e.target[3].value,
      price: e.target[4].value,
      synopsis: e.target[5].value,
    };

    confirm("Save this book to the database");

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
    navigate("/");
  };

  return (
    <div className="add-book" data-aos="fade-up">
      <h2>Add a Book to Catalog</h2>

      <form className="form" data-aos="flip-right" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" className="input" required />
        <input type="text" placeholder="Author" className="input" required />
        <input type="text" placeholder="Genre" className="input" required />
        <input
          type="text"
          placeholder="https://images.pexels.com..."
          className="input"
          required
        />
        <input type="number" placeholder="Price" className="input" required />
        <textarea
          className="textarea"
          placeholder="Synopsis"
          cols="100"
          rows="20"
          required
        ></textarea>
        <div className="button-container">
          <button type="submit" className="save">
            Save
          </button>
          <button className="cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
