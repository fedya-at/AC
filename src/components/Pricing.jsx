import React from "react";

const Pricing = () => {
  const cards = [
    {
      title: "Basic",
      price: 10,
      features: [
        "Get started with messaging",
        "Flexible team meetings",
        "5 TB cloud storage",
      ],
    },
    {
      title: "Startup",
      price: 24,
      features: [
        "All features in Basic",
        "Flexible call scheduling",
        "10 TB cloud storage",
      ],
    },
    {
      title: "Enterprise",
      price: 48,
      features: [
        "All features in Startup",
        "Dedicated account manager",
        "Unlimited cloud storage",
      ],
    },
  ];

  return (
    <div className="my-10">
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className=" tracking-wide text-amber-400">Flexible </span>
              <span className="text-neutralDGray">Plans</span>
            </h1>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose a plan that works best for you
            </p>
          </div>
          <div className="pt-24 flex justify-between">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`w-${index === 1 ? "80" : "96"} p-8 ${
                  index === 1
                    ? "bg-slate-900 text-white"
                    : "bg-white text-black"
                } text-center rounded-3xl ${
                  index === 1
                    ? "border-4 shadow-xl border-white"
                    : "pr-16 shadow-xl"
                }`}
                style={{ margin: "0 20px" }}
              >
                <h1
                  className={`text-${
                    index === 1 ? "white" : "black"
                  } font-semibold text-2xl`}
                >
                  {card.title}
                </h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">{card.price}</span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  {card.features.map((feature, index) => (
                    <p
                      key={index}
                      className={`font-semibold text-gray-400 text-left ${
                        index > 0 ? "pt-5" : ""
                      }`}
                    >
                      <span className="material-icons align-middle">done</span>
                      <span className="pl-2">{feature}</span>
                    </p>
                  ))}
                  <a href="#" className="">
                    <p className="w-full py-4 btn-primary mt-8">
                      <span className="font-medium">Choose Plan</span>
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
