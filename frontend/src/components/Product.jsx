/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="product-card p-3 rounded">
      <Card border="0">
        <Link to={`/products/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ objectFit: "cover", height: "200px" }}
          />
        </Link>
        <Card.Body>
          <Card.Title as="div">
            <Card.Link as={Link} to={`/product/${product._id}`}>
              <strong>{product.name}</strong>
            </Card.Link>
          </Card.Title>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3" className="text-black bold">
            {product.price} DT{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
