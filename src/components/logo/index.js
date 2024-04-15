import React from "react";
import Image from "../../assets/weather_logo.png";
import "./index.css";

const index = () => {
  return (
    <div className="logo-container">
      <img src={Image} alt="logo" id="logo" />
      <span id="logo-text">
        <span id="first">Wea</span>
        <span id="second">The</span>
        <span id="third">R</span>
      </span>
    </div>
  );
};

export default index;
