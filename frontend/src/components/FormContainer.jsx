/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  
  return (
    <Container className="bg-opacity-10 backdrop-filter backdrop-blur-md backdrop-saturate-150 p-4 rounded-md">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
