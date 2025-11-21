import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import heroSectionPhoto from "../../accets/heroSectionPhoto/heroPhoto.png";

const HeroSection = () => {
  return (
    <div className="hero_pareni_div">
      <div className="heor_grid_div">
        <div>
          <div className="hero_text_div">
            <h1>
              <span className="imagination">imagination</span> is more important
              than knowledge
            </h1>
            <p>
              Together we the people achieve more than any single person <br />
              could ever do alone.{" "}
            </p>

            <Link>
              <button className="getting_started_btn">GETTING STARTED</button>
            </Link>
          </div>
        </div>
        <div className="hero_photo_div">
          <img className="hero_person_photo" src={heroSectionPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
