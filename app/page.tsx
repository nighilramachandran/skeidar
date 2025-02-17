import React from "react";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BestSeller />
      <Hero />
    </React.Fragment>
  );
}
