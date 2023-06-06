import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

import "./edit.scss";

const Edit = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-book" data-aos="fade-up">
      <h2>Edit Book</h2>

      <form className="form" data-aos="flip-right" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" className="input" />
        <input type="text" placeholder="Author" className="input" />
        <input type="text" placeholder="Genre" className="input" />
        <input
          type="text"
          placeholder="https://images.pexels.com..."
          className="input"
        />
        <input type="number" placeholder="Price" className="input" />
        <textarea
          className="textarea"
          placeholder="Synopsis"
          cols="100"
          rows="20"
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
