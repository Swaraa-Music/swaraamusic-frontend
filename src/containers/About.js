// Packages
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
import logo from "../assets/img/logo_purple_transparent.png";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/about.json";
import { API } from "../config";
import isEqual from "react-fast-compare";

const About = () => {
  const history = useHistory();

  // States

  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/abouts`);
        setAbout(response.data);

        setIsLoading(false);
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
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
      {about?.map((item, i) => {
      
        return (
          // item._id === "61b35cc66805e98e15cef301" && (
          <>
            {item?.title && (
              <div className="about__container" key={i}>
                <img src={logo} alt={logo} data-aos="fade" loading="lazy" />
                {/* <h1 className="txt-header-purple">{item?.title}</h1> */}
                {i === 0 && (
                  <h1 className="txt-header-purple">{item?.title}</h1>
                )}
                <h2 className="txt-description-black-bold">{item?.subTitle}</h2>
                <p className="txt-description-black">{item?.text}</p>

                <button
                  data-aos="fade"
                  className="btn-burgundy"
                  onClick={() => history.push("/contact")}
                >
                  Get your quote
                </button>
              </div>
            )}
          </>
          // )
        );
      })}

      <Footer />
    </div>
  );
};

// export default About;
export default React.memo(About, isEqual);
