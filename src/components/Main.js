import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { pymSendHeight } from "../utils/handlePym";
import SimpleMap from "./SimpleMap";

class Main extends React.Component {
  componentDidMount() {
    // This is intended to fix bug where app is clipped at bottom
    // on initial load.
    pymSendHeight({ timeout: 500 });
    pymSendHeight({ timeout: 1000 });
  }

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we
    // update the iframe height after DOM elements have been updated.
    pymSendHeight();
  }

  render() {
    const { data } = this.props;
    const { geoData, contactTracerData } = data;
    return (
      <div className="container__outer">
        <div className="container__inner">
          <Header
            headline="How many contact tracers does Pennsylvania need?"
            subtitle="As of June 8, public health experts estimate that Pennsylvania needs nearly 4,000 contact tracers to reach 
            the contacts of all new COVID-19 cases within one week. Estimates are based on the number of new cases in 
            each county over the past 14 days."
          />
          <Body data={data}>
            <SimpleMap
              geoData={geoData}
              contactTracerData={contactTracerData}
            />
          </Body>
          <Footer
            byline="Daniel Simmons-Ritchie"
            source="George Washington University Contact Tracing Workforce Estimator (June 8, 2020); Pa. Department of Health COVID-19 case data (June 8, 2020)"
            outlet="Spotlight PA"
            outletUrl="https://www.spotlightpa.org/"
          />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
