import { csv } from "d3-fetch";
import DUMMY_DATA from "../data/pa_contact_tracers.csv";

const loadData = () => {
  /* Fetch and parse files. */
  return Promise.all([csv(DUMMY_DATA), import("~/data/pa-county.json")]).then(
    ([contactTracerData, paCounties]) => {
      const data = {};
      data.contactTracerData = contactTracerData;
      data.geoData = paCounties;
      // data.geoData = topoToGeo(paCounties, "pa-county");
      return data;
    }
  );
};

export default loadData;
