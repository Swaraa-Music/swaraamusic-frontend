// img
import itrsqLogo from "../assets/img/itrsq_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div>
          <a
            href="https://www.facebook.com/swaraamusiclive/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/swaraamusiclive/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/swaraamusiclive"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
              style={{
                fill: "white",
                color: "white",
                display: "block",
                height: "auto",
                width: "100%",
                visibility: "visible",
              }}
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC8bEYJQYbbdHCGtss6BQZSg"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <div>
          Website designed by{" "}
          <a href="https://www.itrsq.com/" target="_blank" rel="noreferrer">
            <img src={itrsqLogo} alt={itrsqLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
