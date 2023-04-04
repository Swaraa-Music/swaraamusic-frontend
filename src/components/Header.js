// img
import logo from "../assets/img/logo_white_transparent.png";

// Packages
import { Link, useLocation, useHistory } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  // States
  const [modal, setModal] = useState(false);
  return (
    <div className="header bg-pink-purple-gradient">
      <div className="header__logo__container">
        <div>
          <a
            href="https://www.facebook.com/swaraamusiclive/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/swaraamusiclive/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/swaraamusiclive"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC8bEYJQYbbdHCGtss6BQZSg"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-youtube"></i>
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
          <p style={{ fontSize: "18px" }}>
            <a href="tel:07866 366 197" style={{ fontSize: "18px" }}>
              07866 366 197
            </a>{" "}
            or
            <a
              href="tel:07944 587 606"
              style={{ fontSize: "18px", marginLeft: "6px" }}
            >
              07944 587 606
            </a>
          </p>
          <p style={{ fontSize: "18px" }}>
            <a href="mailto:info@swaraamusic.com" style={{ fontSize: "18px" }}>
              info@swaraamusic.com
            </a>
          </p>
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
            to="/events"
            className={
              location.pathname === "/events"
                ? "header__clicked"
                : "underline-grow"
            }
            onClick={() => setModal(!modal)}
            onMouseOver={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
          >
            EVENTS
            {modal && (
              <div className="events__dropdown">
                <Link to="/past" onClick={() => setModal(false)}>
                  Previous Gigs
                </Link>
                <Link to="/testimonials" onClick={() => setModal(false)}>
                  Testimonials
                </Link>
                <Link to="/videotestimonials" onClick={() => setModal(false)}>
                  Video Testimonials
                </Link>
              </div>
            )}
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
