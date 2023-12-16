import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";

const Home = () => {
  const Heading = "Your Favourite Food Delivered Hot & Fresh";
  const Text =
    "Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.";

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div
          className="home-banner-image-container"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={BannerBackground} alt="banner-background" />
        </div>
        <div
          className="home-text-section"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h1 className="primary-heading">{Heading}</h1>
          <p className="primary-text">{Text}</p>
          <button type="button" className="home-button">
            Order Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div
          className="home-banner-image"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={BannerImage} alt="bannerimage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
