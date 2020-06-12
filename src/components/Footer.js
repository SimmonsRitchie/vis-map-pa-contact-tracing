import React from "react";
import PropTypes from "prop-types";

const Footer = ({ byline, outlet, outletUrl, source, footnote }) => (
  <div>
    <div className="footer__container">
      <div>
        {footnote && (
          <div className="footer__notes is-size-7">
            <i>{footnote}</i>
          </div>
        )}
        <div className="footer__byline-source is-size-7 has-text-grey">
          <span>{`Source: ${source} `}</span>
          <span className="footer__source">
            <span className="footer__separator" />
            <span className="footer__byline">
              {`Graphic by: ${byline}, `}
              <a href={outletUrl}>{outlet}</a>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

Footer.defaultProps = {
  footnote: null,
};

Footer.propTypes = {
  byline: PropTypes.string.isRequired,
  outlet: PropTypes.string.isRequired,
  outletUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  footnote: PropTypes.string,
};

export default Footer;
