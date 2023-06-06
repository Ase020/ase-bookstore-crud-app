import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

import "./edit.scss";

const Edit = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const bookObj = searchParams.get("bookObj");

    if (bookObj) {
      const decodedBookObj = decodeURIComponent(bookObj);
      const parsedBookObj = JSON.parse(decodedBookObj);
      setBook(parsedBookObj);
    }
  }, [location.search]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setBook((prevBook) => ({
      ...prevBook,
      [fieldName]: fieldValue,
    }));
  };

  console.log(book);

  const handleSubmit = (e) => {
    e.preventDefault();
    confirm(`Updated Book: ${book.title}?`);

    fetch(`http://localhost:9292/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        res.json();
        if (res.ok) {
          // navigate(-1);
          console.log(res);
        } else {
          throw new Error("Failed to update book");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => {
        // Handle error case
        console.log(error);
      });

    // navigate(-1);
  };

  return (
    <div className="add-book" data-aos="fade-up">
      <h2>Edit Book</h2>

      <form className="form" data-aos="flip-right" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input"
          value={book?.title || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="input"
          value={book?.author || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          className="input"
          value={book?.genre || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="https://images.pexels.com..."
          className="input"
          value={book?.image || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Price"
          className="input"
          name="price"
          value={book?.price || ""}
          onChange={handleChange}
        />
        <textarea
          className="textarea"
          name="synopsis"
          placeholder="Synopsis"
          cols="100"
          rows="20"
          value={book?.synopsis || ""}
          onChange={handleChange}
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

export default Edit;
