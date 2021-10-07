// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

// Components
import Footer from "../components/Footer";

// img
import logoWhite from "../assets/img/logo_white_transparent.png";
import logoPurple from "../assets/img/logo_purple_transparent.png";
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";
import stars from "../assets/img/5-star-rating.png";
import profile from "../assets/img/profile.jpg";

// JSON
import testimonials from "../assets/json/testimonials.json";

const Home = () => {
  const history = useHistory();
  const hero = [
    {
      img: hero1,
      title: "Bollywood Live Singing for Events",
      description:
        "Birthday parties, Mehndi Nights, Anniversaries, and more - Swaraa Music brings your event to life with Bolywood live singing",
      button: "Contact Us",
    },
    {
      img: hero2,
      title: "Bollywood Music Events",
      description:
        "Swaraa Music cna provide a sparkle to your event with Bollywood singing ranging from the Golden Oldies to the lates hits",
      button: "Contact Us",
    },
    {
      img: hero3,
      title: "Anniversary Parties",
      description:
        "Let Swaraa Music add a touch of magic to your anniversary celebrations with a range of Classic Retro Bollywood songs and the latest chart-busters.",
      button: "Contact Us",
    },
  ];
  return (
    <div className="home">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1000}
        interval={4000}
      >
        {hero.map((hero, index) => {
          return (
            <div className="hero__slide">
              <div className="hero__text" data-aos="fade">
                <img
                  src={logoWhite}
                  alt="Swaraa Music Logo"
                  className="hero__logo"
                />
                <h1 className="hero__title">{hero.title}</h1>
                <h2 className="hero__description">{hero.description}</h2>
                <button
                  className="btn-burgundy"
                  onClick={() => history.push("/contact")}
                >
                  {hero.button}
                </button>
              </div>
              <img src={hero.img} alt={hero.img} className="hero__img" />
            </div>
          );
        })}
      </Carousel>
      <div className="home__about">
        <img src={logoPurple} alt="Swaraa Music Logo" data-aos="fade" />
        <div>
          <h1 className="txt-header-purple" data-aos="fade-left">
            Who are Swaraa Music ?
          </h1>
          <h2 className="txt-description-black-bold" data-aos="fade-left">
            Swaraa Music are a leading Live Bollywood Asian Indian music group
            based in London. We are a collective team of professional vocalists
            and musicians specialising in all decades of Asian Indian popular
            music.
          </h2>
          <p className="txt-description-black" data-aos="fade-left">
            Our speciality is in all genres of songs from many of the old
            classic movies of yesteryear to current day new releases from the
            Bollywood film industry. A close relationship with all of our
            versatile musicians ensures, quality musical performances, ranging
            from soulful romantic Bollywood songs, Uplifting dance songs,
            Bhangra, Ghazals, Qawalis as well as the traditional taste of garba
            and bhajans – Making your event a truly enjoyable and special!
          </p>
          <button
            data-aos="fade"
            className="btn-burgundy"
            onClick={() => history.push("/about")}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="home__testimonials bg-pink-purple-gradient">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div className="home__testimonial">
                <h1>" {testimonial.text} "</h1>
                <h2>{testimonial.author}</h2>
                <h3>{testimonial.from}</h3>
                <img src={stars} alt={stars} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="home__about">
        <img src={profile} alt="Swaraa Music Singer" />
        <div>
          <h2 className="txt-description-black-bold">
            Swaraa Music has more than 15 years of experience in live Indian
            Bollywood music entertainment and always aim to bring music to your
            ears, whatever the occasion or venue! Be it a small family function
            or for a large community, charity or dinner and dance event, the
            band line-up is tailored for your individual requirements.
          </h2>
          <p className="txt-description-black">
            Our normal set-up of the live Bollywood Asian band includes: <br />
            <br />
            <ul>
              <li>
                Male & Female Vocalists, Keyboardist, Drummer and Indian
                Percussionist (Tabla/Dholak)
              </li>
              <li>
                We are also able to provide a Full PA sound system, along with a
                sound engineer, that you might require meaning everything is
                dealt with by our professional team, allowing you to just sit
                back, relax and enjoy your entertainment.
              </li>
              <li>
                At Swaraa Music, we do not just specialise in providing live
                music – we will make sure your band looks great too.
              </li>
            </ul>
          </p>
          <button
            className="btn-burgundy"
            onClick={() => history.push("/contact")}
          >
            Get a Quote
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
