import React from "react";
import BestSeller from "./components/BestSeller";
import Carousel, { ItemPrpos } from "./components/Carousel";
import Hero from "./components/Hero";
import { Box } from "@mui/material";
import Image from "next/image";
import { lambUrl } from "./utils/GlobalAssets";

const items: ItemPrpos[] = [
  {
    name: "",
    item: (
      <Box
        sx={{
          height: "200px",
          width: "200px",
          // borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* <Image
          src={lambUrl}
          alt="lamb"
          priority
          fill
          style={{ objectFit: "cover" }}
        ></Image> */}
        <Image alt="lamb" src={lambUrl} width={70} height={70}></Image>
      </Box>
    ),
  },
  {
    name: "",
    item: (
      <Box sx={{ height: "200px", width: "200px", background: "orange" }}></Box>
    ),
  },
  {
    name: "",
    item: (
      <Box sx={{ height: "200px", width: "200px", background: "orange" }}></Box>
    ),
  },
  {
    name: "",
    item: (
      <Box sx={{ height: "200px", width: "200px", background: "orange" }}></Box>
    ),
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BestSeller />
      <Carousel items={items} />
      <Hero />
    </React.Fragment>
  );
}
