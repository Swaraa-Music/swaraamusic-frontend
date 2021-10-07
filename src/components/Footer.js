// img
import itrsqLogo from "../assets/img/itrsq_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
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
        <div>
          Website designed by{" "}
          <a href="https://www.itrsq.com/" target="_blank">
            <img src={itrsqLogo} alt={itrsqLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
