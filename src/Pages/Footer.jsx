import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { IoLogoTwitter } from "react-icons/io";
function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#specifications">Specifications</a>
          </li>
        </ul>
      </nav>
      <div className="footer__social">
        <button className="footer__social-btn">
          <SlSocialVkontakte />
        </button>
        <button className="footer__social-btn">
          <FaFacebookF />
        </button>
        <button className="footer__social-btn">
          <IoLogoTwitter />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
