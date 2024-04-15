import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./index.css";

const index = () => {
  return (
    <div className="aside-container">
      <div className="aside-section">
        <div>Home</div>
        <ArrowRightIcon />
      </div>
      <div className="aside-section">
        <div>Recent</div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default index;
