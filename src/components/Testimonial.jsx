import React from "react";
import TestimonialSwiper from "./TestimonialSwiper";
import AboutBanner from "../assets/about-background.png";

const Testimonial = () => {
  const Heading = "What They Are Saying";
  const Text =
    "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.";
  const text =
    "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum.";

  return (
    <div className="testimonial-section-container">
      <div className="testimonial-section-back-banner">
        <img src={AboutBanner} alt="testbanner" />
      </div>
      <div
        className="testimonial-section-top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="primary-subheading">Testimonial</h1>
        <h1 className="primary-heading">{Heading}</h1>
        <p className="primary-text">{Text}</p>
      </div>
      <div
        className="testimonial-section-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <TestimonialSwiper />
      </div>
    </div>
  );
};

export default Testimonial;
