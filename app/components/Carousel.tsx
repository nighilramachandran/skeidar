"use client";

import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  { title: "Slide 1", image: "/images/slide1.jpg" },
  { title: "Slide 2", image: "/images/slide2.jpg" },
  { title: "Slide 3", image: "/images/slide3.jpg" },
  { title: "Slide 4", image: "/images/slide4.jpg" },
  { title: "Slide 5", image: "/images/slide5.jpg" },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full max-w-5xl mx-auto"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{ height: "300px", width: "360px", background: "red" }}
          ></Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
