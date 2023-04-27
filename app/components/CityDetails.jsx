import React from "react";
import CityDetail from "./CityDetail";
import WeatherContainer from "./WeatherContainer";

const CityDetails = ({ cityData }) => {
  const weatherList = cityData.list;

  return (
    <div>
      <CityDetail cityDetail={cityData} />
      <WeatherContainer weatherList={weatherList} />
    </div>
  );
};

export default CityDetails;
