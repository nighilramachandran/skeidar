"use client";

import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface CarouselProps {
  items: ItemPrpos[];
}

export interface ItemPrpos {
  name: string;
  item: ReactNode;
}

const swiperSlideItemWrapper: SxProps = {
  height: "375px",
  width: "375px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ padding: "35px 0px" }}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={swiperSlideItemWrapper}>{item.item}</Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
