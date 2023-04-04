// Packages
import axios from "axios";
import React, { useState, useEffect } from "react";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
import stars from "../assets/img/5-star-rating.png";
import { API } from "../config";
import isEqual from "react-fast-compare";

const Testimonials = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/testimonials`);
        setData(response.data);
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
    <div className="testimonials">
      {data.map((testimonial, index) => {
        return (
          <div className="testimonial">
            <h1>" {testimonial.testimonial} "</h1>
            <h2>{testimonial.author}</h2>
            <h3>{testimonial.event}</h3>
            <img src={stars} alt={stars} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

// export default Testimonials;
export default React.memo(Testimonials, isEqual);
