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

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/home.json";
import { API } from "../config";
import isEqual from "react-fast-compare";
import react from "react";
import HomeTestimonials from "./HomeTestimonials";

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
  return (
    <>
      {isLoading ? (
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
            transitionTime={2000}
            interval={10000}
            swipeable={false}
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

          <div className="home__about">
            <img
              src={logo}
              // src={profile}
              alt="Swaraa Music Singer"
              style={{ width: "30%" }}
            />
            {/* <div className={"home_about_img"}>

        </div> */}
            <div className="">
              <h1 className="txt-header-purple">{home[0]?.title}</h1>
              <h2 className="txt-description-black-bold">
                {home[0]?.subTitle}
              </h2>
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

          <HomeTestimonials testimonials={testimonials} />
          {home[1]?.subTitle && (
            <div className="home__about">
              <div className={"home_about_img"}>
                <img
                  src={home[1]?.image}
                  alt="Swaraa Music Singer"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="">
                {/* <h1 className="txt-header-purple">{home[1]?.title}</h1> */}
                <h2 className="txt-description-black-bold">
                  {home[1]?.subTitle}
                </h2>
                <p className="txt-description-black home_para">
                  {home[1]?.text}
                </p>
                <button
                  data-aos="fade"
                  className="btn-burgundy"
                  onClick={() => history.push("/about")}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};
// export default Home;
export default react.memo(Home, isEqual);
