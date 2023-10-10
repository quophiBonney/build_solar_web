import React from "react";
import "../../App.css";
import Hero from "./Hero";
import HomeForm from "./HomeForm";
import NumberOne from "./NumberOne";
import Testimonial from "./Testimonial";
import Benefits from "./Benefits";
import Power from "./Power";
import Video from "./Video";
import Journey from "./Journey";
const Home = () => {
  return (
    <div>
      <Hero />
      <HomeForm />
      <NumberOne />
      <Testimonial />
      <Benefits />
      <Power />
      <Video />
      <Journey />
    </div>
  );
};

export default Home;
