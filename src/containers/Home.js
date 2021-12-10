// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
import logoWhite from "../assets/img/logo_white_transparent.png";
import logoPurple from "../assets/img/logo_purple_transparent.png";
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";
import hero4 from "../assets/img/hero4.jpeg";
import hero5 from "../assets/img/hero5.jpg";
import stars from "../assets/img/5-star-rating.png";
import profile from "../assets/img/profile.jpg";

// JSON
// import testimonials from "../assets/json/testimonials.json";

const Home = () => {
  const history = useHistory();
  const hero = [
    {
      img: hero1,
      title: "Bollywood Live Singing for Events",
      description:
        "Birthday parties, Mehndhi Nights, Anniversaries, and more - Swaraa Music brings your event to life with Bollywood live singing",
      button: "Contact Us",
    },
    {
      img: hero2,
      title: "Bollywood Music Events",
      description:
        "Swaraa Music can provide a sparkle to your event with Bollywood singing ranging from the Golden Oldies to the lates hits",
      button: "Contact Us",
    },
    {
      img: hero3,
      title: "Parties",
      description:
        "Let Swaraa Music add a touch of magic to your celebrations with a range of Classic Retro Bollywood songs and the latest chart-busters",
      button: "Contact Us",
    },
    {
      img: hero5,
      title: "Corporate & Charity Events",
      description:
        "If you’re planning a corporate fundraising event to raise money for a great cause or simply want a lively work event, Swaraa Music will guarantee a lovely time for everyone",
      button: "Contact Us",
    },
    {
      img: hero4,
      title: "Weddings & Receptions",
      description:
        "A special day needs a special performance, don't you think ?",
      button: "Contact Us",
    },
  ];
  // States
  const [testimonials, setTestimonials] = useState();
  const [heroSliders, setHeroSliders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/testimonials`
        );
        setTestimonials(response.data);
        const response1 = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/pictures/hero`
        );
        setHeroSliders(response1.data);
        const response2 = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/abouts`
        );
        setAbout(response2.data);

        setIsLoading(false);

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
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
        {heroSliders.map((hero, index) => {
          return (
            <div className="hero__slide">
              <div className="hero__text" data-aos="fade">
                {/* <img
                  src={logoWhite}
                  alt="Swaraa Music Logo"
                  className="hero__logo"
                /> */}
                <div>
                  {" "}
                  <h1 className="hero__title">{hero.title}</h1>
                </div>
                <div>
                  {" "}
                  <h2 className="hero__description">{hero.text}</h2>
                  <button
                    className="btn-burgundy"
                    onClick={() => history.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              <img
                src={hero.picture}
                alt={hero.picture}
                className="hero__img"
              />
            </div>
          );
        })}
      </Carousel>
      <div className="home__about">
        <img src={logoPurple} alt="Swaraa Music Logo" />

        {about.map((about) => {
          return (
            about._id === "61b35973d330521b079d16c7" && (
              <div>
                <h1 className="txt-header-purple">{about.title}</h1>
                <h2 className="txt-description-black-bold">{about.subTitle}</h2>
                <p className="txt-description-black">{about.text}</p>
                <button
                  data-aos="fade"
                  className="btn-burgundy"
                  onClick={() => history.push("/about")}
                >
                  Learn More
                </button>
              </div>
            )
          );
        })}
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
                <h1>" {testimonial.testimonial} "</h1>
                <h2>{testimonial.author}</h2>
                <h3>{testimonial.event}</h3>
                <img src={stars} alt={stars} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="home__about">
        <img src={profile} alt="Swaraa Music Singer" />
        {about.map((about) => {
          return (
            about._id === "61b35c566805e98e15cef2ff" && (
              <div>
                <h1 className="txt-header-purple">{about.title}</h1>
                <h2 className="txt-description-black-bold">{about.subTitle}</h2>
                <p className="txt-description-black">{about.text}</p>
                <button
                  data-aos="fade"
                  className="btn-burgundy"
                  onClick={() => history.push("/about")}
                >
                  Get a Quote
                </button>
              </div>
            )
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
