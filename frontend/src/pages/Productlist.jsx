import React from "react";
import products from "../products.js";
const Productlist = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutralDGray">
            Latest Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    style={{ objectFit: "contain" }} // Set object-fit to "contain"
                  />
                </div>
                <div className="mt-4 flex justify-between text-xl">
                  <div>
                    <h3 className=" font-bold text-neutralDGray">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-neutralDGray">
                    {product.price} DT
                  </p>
                </div>
                <div className="text-start text-neutralDGray text-sm mt-4">
                  {product.description}
                </div>
                <div className="mt-4 flex justify-center text-neutralGray">
                  <a className="btn-primary">View details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
