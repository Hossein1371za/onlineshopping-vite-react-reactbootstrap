import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const sponsorList = [
  {
    imgUrl: "/src/assets/images/sponsor/01.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/02.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/03.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/04.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/05.png",
  },
  {
    imgUrl: "/src/assets/images/sponsor/06.png",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              //   pagination={{
              //     clickable: true,
              //   }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {sponsorList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <img src={item.imgUrl} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
