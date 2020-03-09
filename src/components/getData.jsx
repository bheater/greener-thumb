import React from "react";
import ReactDOM from "react-dom";

function GetData(){
  const hardinessDataStr =
    '{"zone": "10a", "coordinates": {"lat": 37.42,"lon": -122},"temperature_range": "30 to 35"}';
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
