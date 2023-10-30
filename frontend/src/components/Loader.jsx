import React from "react";
import "../app.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-overlay" />
      <div className="loader">
        <div className="cloud front">
          <span className="left-front" />
          <span className="right-front" />
        </div>
        <span className="sun sunshine" />
        <span className="sun" />
        <div className="cloud back">
          <span className="left-back" />
          <span className="right-back" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
