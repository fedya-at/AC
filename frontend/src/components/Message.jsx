import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = {
  variant: PropTypes.string, // Add this line for prop validation
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
