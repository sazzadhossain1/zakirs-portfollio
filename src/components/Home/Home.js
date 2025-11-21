import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <HeroSection></HeroSection>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Home;
