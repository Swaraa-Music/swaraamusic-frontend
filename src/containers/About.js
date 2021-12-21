// Packages
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
import logo from "../assets/img/logo_purple_transparent.png";

const About = () => {
  const history = useHistory();

  // States

  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/abouts`
        );
        setAbout(response.data);

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
    <div className="about">
      {about.map((about) => {
        return (
          about._id === "61b35cc66805e98e15cef301" && (
            <div className="about__container">
              <img src={logo} alt={logo} data-aos="fade" />
              <h1 className="txt-header-purple">{about.title}</h1>
              <h2 className="txt-description-black-bold">{about.subTitle}</h2>
              <p className="txt-description-black">{about.text}</p>
              <button
                data-aos="fade"
                className="btn-burgundy"
                onClick={() => history.push("/contact")}
              >
                Get your quote
              </button>
            </div>
          )
        );
      })}

      <Footer />
    </div>
  );
};

export default About;
