import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonialData from "../constants/TestimonialData";

const TestimonialSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonialData.map((item) => {
          const { id, name, designation, avatar, message } = item;

          return (
            <SwiperSlide key={id}>
              <div className="testimonial-card">
                <div className="test-image">
                  <img src={avatar} alt={name} />
                </div>
                <div className="test-content">
                  <h2 className="test-name">{name}</h2>
                  <h4 className="test-designation">{designation}</h4>
                  <p className="test-message">{message}</p>
                  <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
