// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo_purple_transparent.png";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
// import logoPurple from "../assets/img/logo_purple_transparent.png";
import stars from "../assets/img/5-star-rating.png";
import profile from "../assets/img/profile.jpg";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/home.json";
import { API } from "../config";
import isEqual from "react-fast-compare";
import react from "react";

const Home = () => {
  const history = useHistory();

  // States
  const [testimonials, setTestimonials] = useState();
  const [heroSliders, setHeroSliders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [home, setHome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderResponse, testimonialsResponse, homeResponse] =
          await Promise.all([
            axios.get(`${API}/pictures/hero`),
            axios.get(`${API}/testimonials`),
            axios.get(`${API}/home`),
          ]);

        setHeroSliders(sliderResponse?.data);
        setTestimonials(testimonialsResponse?.data);
        setHome(homeResponse?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(tags);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
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
                  <h1 className="hero__title">{hero?.title}</h1>
                </div>
                <div>
                  <h2 className="hero__description">{hero?.text}</h2>
                  <button
                    className="btn-burgundy"
                    onClick={() => history.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              <img
                src={hero?.picture}
                alt={hero?.picture}
                className="hero__img"
              />
            </div>
          );
        })}
      </Carousel>
      {/* <div className="home__about">
        <img src={logoPurple} alt="Swaraa Music Logo" />
        <div>
          <h1 className="txt-header-purple">{about[0]?.title}</h1>
          <h2 className="txt-description-black-bold">{about[0]?.subTitle}</h2>
          <p className="txt-description-black">{about[0]?.text}</p>
          <button
            data-aos="fade"
            className="btn-burgundy"
            onClick={() => history.push("/about")}
          >
            Get a Quote
          </button>
        </div>
     
      </div> */}
      <div className="home__testimonials bg-pink-purple-gradient">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
        >
          {testimonials?.map((testimonial, index) => {
            return (
              <div className="home__testimonial">
                <div
                  dangerouslySetInnerHTML={{
                    __html: testimonial?.testimonial,
                  }}
                  className="home_testimonial_text"
                ></div>
                <h2>{testimonial?.author}</h2>
                <h3>{testimonial?.event}</h3>
                <img src={stars} alt={stars} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="home__about">
        <div>
          <img
            src={profile}
            alt="Swaraa Music Singer"
            style={{ width: "90%" }}
          />
        </div>
        <div className="">
          <h1 className="txt-header-purple">{home[0]?.title}</h1>
          <h2 className="txt-description-black-bold">{home[0]?.subTitle}</h2>
          <p className="txt-description-black home_para">{home[0]?.text}</p>
          <button
            data-aos="fade"
            className="btn-burgundy"
            onClick={() => history.push("/about")}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="about__container home_mobile_none">
        <img src={logo} alt={logo} data-aos="fade" />
        {/* <h1 className="txt-header-purple">{about[1]?.title}</h1> */}
        <h2 className="txt-description-black-bold">{home[1]?.subTitle}</h2>
        <p className="txt-description-black">{home[1]?.text}</p>

        <button
          data-aos="fade"
          className="btn-burgundy"
          onClick={() => history.push("/contact")}
        >
          Get your quote
        </button>
      </div>
      <Footer />
    </div>
  );
};
// export default Home;
export default react.memo(Home, isEqual);
