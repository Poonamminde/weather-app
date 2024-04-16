import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./index.css";

const index = ({ setPage }) => {
  return (
    <div className="aside-container">
      <div className="aside-section" onClick={() => setPage(0)}>
        <div>Home</div>
        <ArrowRightIcon />
      </div>
      <div className="aside-section" onClick={() => setPage(1)}>
        <div>Recent</div>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default index;
