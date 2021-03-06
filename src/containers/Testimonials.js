// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// img
import stars from "../assets/img/5-star-rating.png";

const Testimonials = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/testimonials`
        );
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

export default Testimonials;
