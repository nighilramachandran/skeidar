import React from "react";
import BestSeller from "./components/BestSeller";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import { carouselItems1, carouselItems2 } from "./utils/CarouselItems";
import BestSellerSwipper from "./components/BestSellerSwipper";
import Rated from "./components/Rated";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BestSeller />
      <Carousel items={carouselItems1} />
      <Hero />
      <Carousel items={carouselItems2} title="Carousel with SKU-products" />
      <BestSellerSwipper />
      <Rated />
    </React.Fragment>
  );
}
