import { Carousel } from "flowbite-react";
import React from "react";
import img from "../assets/img.png";
import solar from "../assets/solar.png";
import homeSvg from "../assets/blobhome.svg";

const Home = () => {
  return (
    <div className="bg-neutralSilver relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={homeSvg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen relative z-10">
        <Carousel className="w-full mx-auto">
          {/* Carousel slides */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-around gap-8">
            <div>
              <img src={img} alt="" />
            </div>
            {/* Hero Section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Empowering Your Home with{" "}
                <span className="text-brandPrimary leading-snug">
                  Solar Energy
                </span>{" "}
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Discover Clean, Green, and Affordable Energy.
              </p>
              <a className="btn-primary" href="/register">
                Register
              </a>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={solar} alt="" className="mt-20" />
            </div>
            {/* Hero Section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Unleash the Power of the Sun at{" "}
                <span className="text-brandPrimary leading-snug">
                  Your Doorstep
                </span>{" "}
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where Sunlight Meets Savings!
              </p>
              <a className="btn-primary" href="/register">
                Register
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
