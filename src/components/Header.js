// img
import logo from "../assets/img/logo_white_transparent.png";

// Packages
import { Link, useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="header bg-pink-purple-gradient">
      <div className="header__logo__container">
        <div>
          <a href="https://www.facebook.com/swaraamusiclive/" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/swaraamusiclive/?hl=fr"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/swaraamusiclive" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>

        <img
          src={logo}
          alt="Swaraa Music Logo"
          className="header__logo"
          data-aos="fade"
          onClick={() => history.push("/")}
        />
        <div>
          <p>07866 366 197 or 07944 587 606</p>
          <p>bookings@swaraamusic.com</p>
        </div>
      </div>
      <div className="header__menu">
        <div className="purple-line" data-aos="slide-right"></div>
        <div className="header__menu__container">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "header__clicked" : "underline-grow"
            }
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            ABOUT
          </Link>

          <Link
            to="/gallery"
            className={
              location.pathname === "/gallery"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            GALLERY
          </Link>
          <Link
            to="/videos"
            className={
              location.pathname === "/videos"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            VIDEOS
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "header__clicked"
                : "underline-grow"
            }
          >
            CONTACT
          </Link>
        </div>
        <div className="purple-line" data-aos="slide-left"></div>
      </div>
    </div>
  );
};

export default Header;