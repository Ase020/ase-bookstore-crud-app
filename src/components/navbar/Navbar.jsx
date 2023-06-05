import {
  PersonOutlined,
  SearchOutlined,
  LightModeOutlined,
  // DarkModeOutlined,
} from "@mui/icons-material";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
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
