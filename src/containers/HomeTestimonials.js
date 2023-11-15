import React from "react";
import stars from "../assets/img/5-star-rating.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeTestimonials = ({ testimonials }) => {
  return (
    <div className="home_testimonials_bg">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
      >
        {testimonials?.map((testimonial, index) => (
          <div className="home__testimonial" key={index}>
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
        ))}
      </Carousel>
    </div>
  );
};

export default HomeTestimonials;
