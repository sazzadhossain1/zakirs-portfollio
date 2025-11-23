import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <HeroSection></HeroSection>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
    </div>
  );
};

export default Home;
