import { Box, SxProps } from "@mui/material";
import React from "react";
import { bestSellerSliderAssets } from "../utils/GlobalAssets";
import { ItemsCard } from "./ItemsCard";

const bestSellerSliderStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: 5,
  overflow: "hidden",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
};

const BestSellerSlider = () => {
  return (
    <Box sx={bestSellerSliderStyles}>
      {bestSellerSliderAssets.map((bstSeller, index) => {
        return (
          <ItemsCard
            key={index}
            imgUrl={bstSeller.imgUrl}
            name={bstSeller.name}
            desc={bstSeller.desc}
          />
        );
      })}
    </Box>
  );
};

export default BestSellerSlider;
