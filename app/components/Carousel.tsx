"use client";

import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface CarouselProps {
  items: ItemPrpos[];
  title?: string;
}

export interface ItemPrpos {
  name: string;
  item: ReactNode;
}

const swiperSlideItemWrapper: SxProps = {
  height: "422px",
  width: "422px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Carousel: React.FC<CarouselProps> = ({ items, title }) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--swiper-theme-color",
      "#808080"
    );
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      {title && (
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Vinter-Medium",
            fontWeight: "lighter",
            letterSpacing: "5px",
            margin: "30px 0",
          }}
        >
          {title}
        </Typography>
      )}
      <Swiper
        modules={[Navigation]}
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
    </Box>
  );
};

export default Carousel;
