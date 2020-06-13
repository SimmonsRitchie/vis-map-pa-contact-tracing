import { format } from "d3-format";

// Formats thousands, 1000 becomes 1k, etc.
export const formatK = format("~s");

// Formats commas, 1000 becomes 1,000
export const formatComma = (value, { defaultVal = "" } = {}) => {
  const formatter = format(",");
  if (value === undefined || value === null) {
    return defaultVal;
  }
  return formatter(value);
};

// formats commas but with 0 dp, 1000.45 becomes 1,000
export const formatCommaZeroDp = (value, { defaultVal = "" } = {}) => {
  const formatter = format(",.0f");
  if (value === undefined || value === null) {
    return defaultVal;
  }
  return formatter(value);
};

export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};
