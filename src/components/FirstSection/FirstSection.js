import React from "react";
import "./FirstSection.css";
import heroSectionPhoto from "../../accets/heroSectionPhoto/heroPhoto.png";
import firstSectionPhoto from "../../accets/FirstSectionPhoto/Screenshot_3_-_Copy_-_Copy-removebg-preview.png";

import aboutBgShape from "../../accets/FirstSectionPhoto/about-bg-shape.png";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div className="firstSection_parent_div">
      <div className="firstSection_grid_div">
        <div className="first_section_photo_div">
          <img className="heroSectionPhoto" src={heroSectionPhoto} alt="" />
          <img className="firstSectionPhoto" src={firstSectionPhoto} alt="" />
          {/* <img className="aboutBgShapeImg" src={aboutBgShape} alt="" /> */}
        </div>
        <div className="first_section_text_div">
          <h1>
            Failure is the condiment That Gives{" "}
            <span className="imagination">Success</span>
          </h1>
          <p>
            Spend more time focusing on the important aspects of your business.
            Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
            advanced virtual HR company, we are offering online HR systems that
            can be customized depending on your business needs.
          </p>

          <Link>
            <button className="download_cv">Download cv</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
