import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
  return (
    <div className="card bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-saturate-125 border-none  rounded-lg p-4 mt-40 mr-20 ml-20">
      {children}
    </div>
  );
};

export default Card;
