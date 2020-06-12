import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import PropTypes from "prop-types";
import createColorScale from "../../utils/scale";

const PA_CENTER = [-77.641, 40.989];

class SimpleMap extends React.Component {
  render() {
    const data = this.props;
    const { geoData, contactTracerData } = data;
    const colorScale = createColorScale([0, 150]);

    return (
      <div className="simple-map__container">
        <ComposableMap
          data-tip=""
          projection="geoMercator"
          projectionConfig={{
            scale: 7500,
          }}
          width={773}
          height={449}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup center={PA_CENTER} zoom={1}>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const datum = contactTracerData.find(
                    (item) => item.county === geo.properties.NAME
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={datum ? colorScale(datum.contact_tracers) : "green"}
                      style={{
                        default: {
                          stroke: "white",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          opacity: "0.5",
                          stroke: "white",
                          strokeWidth: 2,
                          outline: "pink",
                        },
                        pressed: {
                          opacity: "0.5",
                          stroke: "white",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

SimpleMap.propTypes = {
  geoData: PropTypes.objectOf(PropTypes.any).isRequired,
  contactTracerData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SimpleMap;
