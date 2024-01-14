import React from "react";
import "./Testimonials.css";
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const testimonials = [
  {
    id:1,
    avatr: "skdb",
    name: "sidharth",
    review: "lsdkbsjkbdjsbdcj n sjkdbks h bksdb jksdb jsb j",
  },
  {
    id:2,
    avatr: "skdb",
    name: "sidharth",
    review: "lsdkbsjkbdjsbdcj n sjkdbks h bksdb jksdb jsb j",
  },
  {
    id:3,
    avatr: "skdb",
    name: "sidharth",
    review: "lsdkbsjkbdjsbdcj n sjkdbks h bksdb jksdb jsb j",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {testimonials.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="client 1" />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
