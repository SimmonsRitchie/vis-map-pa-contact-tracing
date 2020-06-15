import { csv } from "d3-fetch";
import TRACERS_NEEDED from "../data/pa_contact_tracers.csv";
import CASES_14_DAYS from "../data/pa_cases_14_days_prior_to_06-08-2020.csv";
import joinData from "./join";

const loadData = () => {
  /* Fetch and parse files. */
  return Promise.all([
    csv(TRACERS_NEEDED),
    csv(CASES_14_DAYS),
    import("~/data/pa-county.json"),
  ]).then(([tracersNeeded, newCases, paCounties]) => {
    const data = {};
    data.contactTracerData = joinData({
      dataset1: tracersNeeded,
      dataset2: newCases,
      leftJoinOn: "county",
      rightJoinOn: "county",
      appendKey: "new_cases",
    });
    data.geoData = paCounties;
    // data.geoData = topoToGeo(paCounties, "pa-county");
    return data;
  });
};

export default loadData;
