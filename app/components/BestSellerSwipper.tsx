"use client";

import { Box } from "@mui/material";
import React from "react";
import { bestSellerSliderAssets } from "../utils/GlobalAssets";
import { ItemsCard } from "./ItemsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BestSellerSwipper = () => {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        style={{ padding: "10px" }}
      >
        {bestSellerSliderAssets.map((bstSeller, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <ItemsCard
              imgUrl={bstSeller.imgUrl}
              name={bstSeller.name}
              desc={bstSeller.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BestSellerSwipper;
