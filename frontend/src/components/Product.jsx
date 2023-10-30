import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="my-3 p-3 rounded bg-white">
        <a href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </a>
        <div className="p-4">
          <a
            href={`/products/${product.id}`}
            className="text-black no-underline hover:underline"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Product;
