import { scaleLinear } from "d3-scale";

// SCALE LINEAR
const range = ["#D0B8E5", "#540da1"];

const createColorScale = (domain) => {
  return scaleLinear().domain(domain).range(range).unknown("#ccc").clamp(true);
};

export default createColorScale;
