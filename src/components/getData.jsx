import React from "react";
import ReactDOM from "react-dom";

function GetData(){
  const hardinessDataStr =
    '{"zone": "7a", "coordinates": {"lat": 38.89,"lon": -77.03},"temperature_range": "0 to 5"}';
  const hardinessData = JSON.parse(hardinessDataStr);
  console.log(hardinessData);

  //destructure the returned object
  var {
    zone,
    coordinates: { lat, lon },
    temperature_range
  } = hardinessData;

  console.log(zone);
  console.log("Lat: " + lat + " Lon: " + lon);
  console.log(temperature_range);
}
export default GetData;
