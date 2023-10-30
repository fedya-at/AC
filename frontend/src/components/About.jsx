import React from "react";
import img1 from "../assets/img1.png";
import blob from "../assets/blob2.svg";
import solarp from "../assets/solarp.jpg";
import team1 from "../assets/Equipe.jpg";
import team2 from "../assets/Equipe2.jpg";
import team3 from "../assets/Equipe3.jpg";

const people = [
  {
    name: "Sami Chandoul",
    role: "Expert Renewal Energy",
    image: team1,
  },

  {
    name: "Youssef Chandoul",
    role: "Expert Marketing",
    image: team2,
  },
  {
    name: "Mouhib Chandoul",
    role: "Expert Renewal Energy",
    image: team3,
  },
];
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
              Explore Our Solar Panel Store
            </h2>
            <p className="md:w-3/4 text-lg text-neutralGray">
              Discover a wide range of high-quality solar panels to meet your
              energy needs. Our store offers reliable and efficient solar
              solutions that harness the power of the sun. Take a step towards
              sustainability and reduce your carbon footprint with our
              cutting-edge solar panel technology.
            </p>
            <button
              className="btn-primary mt-4"
              onClick={() => (window.location.href = "/")}
            >
              Learn more
            </button>
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
              Power Your Future with Solar Panels
            </h2>
            <p className="md:w-3/4 text-lg text-neutralGray">
              Embrace renewable energy and make a positive impact on the
              environment with our premium selection of solar panels. We offer
              state-of-the-art solar solutions designed to maximize energy
              efficiency and savings. Whether you re a homeowner, business
              owner, or industry professional, our store has the perfect solar
              panel options to meet your specific requirements.
            </p>
            <button
              className="btn-primary mt-4"
              onClick={() => (window.location.href = "/")}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="font-bold text-6xl tracking-tight sm:text-6xl">
                Meet Our <span className="text-brandPrimary">Team</span>
              </h2>
              <p className="text-xl text-gray-500">
                We are a dedicated and diverse team working together to achieve
                outstanding results. Through collaboration and expertise, we
                strive for excellence and make a positive impact.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 text-3xl sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                      src={person.image}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-2xl font-bold text-neutralDGray ">
                          {person.name}
                        </h3>
                        <p className="text-brandPrimary text-xl font-semibold">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
