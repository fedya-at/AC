import React from "react";
import img1 from "../assets/img1.png";
import blob from "../assets/blob2.svg";
import solarp from "../assets/solarp.jpg";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 relative mt-60">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="relative">
            <div
              className="absolute top-0 left-0 h-80 w-80 transform -translate-x-1/2 -translate-y-1/2 opacity-90"
              style={{ zIndex: -1 }}
            >
              <img src={blob} alt="" className="w-full h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden w-150 h-150">
              <img src={img1} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-7xl text-neutralDGray font-bold mb-4 md:w-4/5">
              What’s Our Resources Story
            </h2>
            <p className="md:w-3/4 text-lg text-neutralGray">
              Praesent fringilla lorem tincidunt, commodo erat sit amet,
              eleifend neque. Etiam nec vestibulum turpis, quis tempus elit. Sed
              tempus elit porttitor odio gravida, sed maximus turpis mattis.
              Vivamus at urna ut libero ornare congue.
            </p>
            <button className="btn-primary mt-4">Learn more</button>
          </div>
        </div>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12 mt-20">
          {/* Right Side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden w-150 h-150">
              <img src={solarp} alt="" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute bottom-0 right-0 h-80 w-80 transform translate-x-1/2 translate-y-1/2 opacity-90"
              style={{ zIndex: -1 }}
            >
              <img src={blob} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Left Side */}
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-neutralDGray font-bold mb-4 md:w-4/5 text-7xl">
              What’s Our Resources Story
            </h2>
            <p className="md:w-3/4 text-lg text-neutralGray">
              Praesent fringilla lorem tincidunt, commodo erat sit amet,
              eleifend neque. Etiam nec vestibulum turpis, quis tempus elit. Sed
              tempus elit porttitor odio gravida, sed maximus turpis mattis.
              Vivamus at urna ut libero ornare congue.
            </p>
            <button className="btn-primary mt-4">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
