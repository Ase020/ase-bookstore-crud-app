import {
  PersonOutlined,
  SearchOutlined,
  LightModeOutlined,
  // DarkModeOutlined,
} from "@mui/icons-material";

import "./navbar.scss";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Navbar = () => {
  return (
    <nav className="navbar" data-aos="fade-down">
      <a href="/">
        <h1 className="logo">
          ase<span>Bookstore</span>
        </h1>
      </a>

      <div className="user-bar">
        <SearchOutlined style={{ cursor: "pointer" }} />
        <PersonOutlined style={{ cursor: "pointer" }} />
        <LightModeOutlined style={{ cursor: "pointer" }} />
        {/* <DarkModeOutlined /> */}
      </div>
    </nav>
  );
};

export default Navbar;
