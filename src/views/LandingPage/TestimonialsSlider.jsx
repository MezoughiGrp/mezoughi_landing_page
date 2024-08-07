import React, { useState } from "react";
import "./testimonialsSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import { Rate } from "antd";

import QUOTES from "../../assets/icons/quotes1.png";

const TestimonialsSlider = () => {
  return (
    <div className="section">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
   
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <img src={QUOTES} alt="" />
            </div>
            <div className="testimonial-card-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              veniam sint? Aperiam earum aliquam ipsum. Voluptate quae ad nihil,
              dolorum eum explicabo vero voluptatibus.
            </div>
            <div className="testimonial-card-bottom">
              <Rate allowHalf defaultValue={4.5} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <img src={QUOTES} alt="" />
            </div>
            <div className="testimonial-card-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              veniam sint? Aperiam earum aliquam ipsum. Voluptate quae ad nihil,
              dolorum eum explicabo vero voluptatibus.
            </div>
            <div className="testimonial-card-bottom">
              <Rate allowHalf defaultValue={4.5} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <img src={QUOTES} alt="" />
            </div>
            <div className="testimonial-card-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              veniam sint? Aperiam earum aliquam ipsum. Voluptate quae ad nihil,
              dolorum eum explicabo vero voluptatibus.
            </div>
            <div className="testimonial-card-bottom">
              <Rate allowHalf defaultValue={4} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <img src={QUOTES} alt="" />
            </div>
            <div className="testimonial-card-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              veniam sint? Aperiam earum aliquam ipsum. Voluptate quae ad nihil,
              dolorum eum explicabo vero voluptatibus.
            </div>
            <div className="testimonial-card-bottom">
              <Rate allowHalf defaultValue={5} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="testimonial-card-top">
              <img src={QUOTES} alt="" />
            </div>
            <div className="testimonial-card-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              veniam sint? Aperiam earum aliquam ipsum. Voluptate quae ad nihil,
              dolorum eum explicabo vero voluptatibus.
            </div>
            <div className="testimonial-card-bottom">
              <Rate allowHalf defaultValue={4.5} />
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};
export default TestimonialsSlider;
