import React from "react";
import AboutBanner from "../assets/about-background.png";
import AboutImage from "../assets/about-background-image.png";

const About = () => {
  const Heading = " Food Is An Important Part Of A Balanced Diet";
  const PrimaryText1 =
    "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.";
  const PrimaryText2 =
    "Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.";

  return (
    <div className="about-section-container">
      <div
        className="about-section-back-banner"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={AboutBanner} alt="aboutbanner" />
      </div>
      <div
        className="about-image"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <img src={AboutImage} alt="about-image" />
      </div>
      <div
        className="about-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="primary-subheading">About</h1>
        <h1 className="primary-heading">{Heading}</h1>
        <p className="primary-text">{PrimaryText1}</p>
        <p className="primary-text">{PrimaryText2}</p>
        <div className="about-buttons-container">
          <button type="button" className="about-button">
            Learn More
          </button>
          <button className="watch-video-button">
            <i className="fa-solid fa-play"></i>
            <span>Watch Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
