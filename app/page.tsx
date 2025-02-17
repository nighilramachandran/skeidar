import React from "react";
import CatergoryList from "./components/CatergoryList";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <React.Fragment>
      <CatergoryList />
      <Hero />
    </React.Fragment>
  );
}
