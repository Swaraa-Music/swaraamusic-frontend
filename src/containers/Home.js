// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo_purple_transparent.png";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/home.json";
import isEqual from "react-fast-compare";
import react from "react";
import HomeTestimonials from "./HomeTestimonials";

const Home = ({ testimonials, heroSliders, home }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (heroSliders?.length !== 0) {
      setIsLoading(false);
    }
  }, [heroSliders]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="home">
        <Metadecorator
          title={tags.pagetitle}
          description={tags.pagedescription}
          tags={tags.tags}
        />

        {heroSliders && (
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
            {heroSliders?.map((hero, index) => {
              return (
                <div className="hero__slide">
                  <div className="hero__text" data-aos="fade">
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
                    loading="lazy"
                    className="hero__img"
                  />
                </div>
              );
            })}
          </Carousel>
        )}

        {home?.length !== 0 && (
          <div className="home__about">
            <img
              src={logo}
              // src={profile}
              alt="Swaraa Music Singer"
              style={{ width: "30%" }}
              loading="lazy"
            />

            <div className="">
              <h1 className="txt-header-purple">{home[0]?.title}</h1>
              <h2 className="txt-description-black-bold">
                {home[0]?.subTitle}
              </h2>
              <p className="txt-description-black home_para">{home[0]?.text}</p>
              <button
                data-aos="fade"
                className="btn-burgundy"
                onClick={() => history.push("/contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}

        {testimonials && <HomeTestimonials testimonials={testimonials} />}
        {home && home[1]?.subTitle && (
          <div className="home__about">
            <div className={"home_about_img"}>
              <img
                src={home[1]?.image}
                alt="Swaraa Music Singer"
                style={{ width: "90%" }}
                loading="lazy"
              />
            </div>
            <div className="">
              {/* <h1 className="txt-header-purple">{home[1]?.title}</h1> */}
              <h2 className="txt-description-black-bold">
                {home[1]?.subTitle}
              </h2>
              <p className="txt-description-black home_para">{home[1]?.text}</p>
              <button
                data-aos="fade"
                className="btn-burgundy"
                onClick={() => history.push("/contact")}
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};
// export default Home;
export default react.memo(Home, isEqual);
