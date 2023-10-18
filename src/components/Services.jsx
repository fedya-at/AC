import React from "react";
import maintenance from "../assets/maintenance.png";
import installing from "../assets/installing.png";
import consulting from "../assets/consulting.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Installing Panels",
      description:
        "We professionally install solar panels for your energy needs.",
      image: installing,
    },
    {
      id: 2,
      title: "Consultation",
      description:
        "We offer expert advice and consultation on solar energy solutions.",
      image: consulting,
    },
    {
      id: 3,
      title: "Maintenance",
      description:
        "We provide ongoing maintenance to ensure your solar panels operate at their best.",
      image: maintenance,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h3 className="text-4xl text-neutralDGray font-semibold mb-2">
          Services
        </h3>
        <h1 className="text-7xl text-neutralDGray font-bold mb-2">
          What We Offer
        </h1>
      </div>
      {/* services card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-8 py-12 text-center md:h-[350px] rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-6 h-24 w-24 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img
                  src={service.image}
                  alt=""
                  className="-ml-8 h-[120px] w-[120px]"
                />
              </div>
              <h4 className="text-3xl font-bold text-neutralDGray mb-4 px-4">
                {service.title}
              </h4>
              <p className="text-lg text-neutralGray px-4">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
