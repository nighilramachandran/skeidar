import React from "react";
import BestSeller from "./components/BestSeller";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import { carouselItems1 } from "./utils/CarouselItems";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BestSeller />
      <Carousel items={carouselItems1} />
      <Hero />
    </React.Fragment>
  );
}
