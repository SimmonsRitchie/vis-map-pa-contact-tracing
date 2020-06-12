import React from "react";
import PropTypes from "prop-types";

const Header = ({ headline, subtitle }) => (
  <div className="header__container">
    <div>
      {headline && (
        <h2 className="title is-4 has-text-weight-bold">{headline}</h2>
      )}
      {subtitle && <h2 className="subtitle is-6">{subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  subtitle: null,
};

Header.propTypes = {
  headline: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
