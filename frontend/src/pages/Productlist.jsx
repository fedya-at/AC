import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product.jsx";
import products from "../products.js";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions.js";
import Message from "../components/Message.jsx";
import Loader from "../components/Loader.jsx";

const Productlist = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="py-48">
      <h1 className=" text-xl py-4 ml-10"> Latest products </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Productlist;
