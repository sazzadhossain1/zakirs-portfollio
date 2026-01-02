import React from "react";
import "./ThirdSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFerry } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  return (
    <div className="thirdSection_parent_div">
      <div className="thirdSection_grid_div">
        <div className="thirdSection_cart_div">
          <FontAwesomeIcon className="icon" icon={faFerry} />
          <h3>design principales</h3>
          <p>
            Need a project completed by an expert? Let’s go! Access a Human
            Resources Consultant to answer questions
          </p>
        </div>
        <div className="thirdSection_cart_middle_div">
          <FontAwesomeIcon className="icon" icon={faFerry} />
          <h3>Unique Values</h3>
          <p>
            Need a project completed by an expert? Let’s go! Access a Human
            Resources Consultant to answer questions
          </p>
        </div>
        <div className="thirdSection_cart_div">
          <FontAwesomeIcon className="icon" icon={faFerry} />
          <h3>Style Components</h3>
          <p>
            Need a project completed by an expert? Let’s go! Access a Human
            Resources Consultant to answer questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
