import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-info">
          <h2 className="logo">aseBOOKSTORE</h2>
          <p className="footnote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>

        <div className="footer-links">
          <div className="link">
            <h4 className="header">About Us</h4>
            <p>Careers</p>
            <p>Our Stores</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="link">
            <h4 className="header">customer care</h4>
            <p>Help Center</p>
            <p>Track Book</p>
            <p>Publishing & Advertisement</p>
            <p>Queries</p>
          </div>

          <div className="link">
            <h4 className="header">contact Us</h4>
            <p> Ngong Ln, Nairobi | Kenya</p>
            <p>Email: info@asebookstore.co.ke</p>
            <p>+254 712 345 678</p>
            <p>@asebookstore254</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
