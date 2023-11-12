/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="product-card p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Card border="0">
          <Card.Img
            src={product.image}
            variant="top"
            style={{ objectFit: "cover", height: "200px" }}
          />
          <Card.Body>
            <Card.Title as="div">
              <Link to={`/product/${product._id}`}>
                <strong>{product.name}</strong>
              </Link>
            </Card.Title>

            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
            <Card.Text as="h3" className="text-black bold">
              {product.price} Dt{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Product;
