import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import createColorScale from "../../utils/createColorScale";
import Tooltip from "../Tooltip";
import LegendColor from "../LegendColor/Container";

const PA_CENTER = [-77.641, 40.989];

const TOOLTIP_SCHEMA = [
  {
    fieldName: "County",
    accessor: "county",
    mainLabel: true,
  },
  {
    fieldName: "Contact tracers needed",
    accessor: "contact_tracers",
  },
];

const SimpleMap = ({ geoData, contactTracerData }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const colorScale = createColorScale({
    data: contactTracerData,
    accessor: "contact_tracers",
  });

  return (
    <div className="simple-map__container">
      <LegendColor colorScale={colorScale} />
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
        <ZoomableGroup center={PA_CENTER} zoom={1} disablePanning>
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const datum = contactTracerData.find(
                  (item) => item.county === geo.properties.NAME
                );
                return (
                  <Geography
                    onMouseEnter={() => {
                      setTooltipContent(datum);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
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
      <ReactTooltip type="light">
        {tooltipContent && (
          <Tooltip data={tooltipContent} schema={TOOLTIP_SCHEMA} />
        )}
      </ReactTooltip>
    </div>
  );
};

SimpleMap.propTypes = {
  geoData: PropTypes.objectOf(PropTypes.any).isRequired,
  contactTracerData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SimpleMap;
