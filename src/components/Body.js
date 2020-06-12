/* eslint-disable react/prefer-stateless-function */
import React from "react";
import PropTypes from "prop-types";

const Body = ({ children }) => {
  return <div className="body__container">{children}</div>;
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Body;
