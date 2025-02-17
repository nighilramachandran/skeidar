import React from "react";
import BestSeller from "./components/BestSeller";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BestSeller />
      <Carousel />
      <Hero />
    </React.Fragment>
  );
}
