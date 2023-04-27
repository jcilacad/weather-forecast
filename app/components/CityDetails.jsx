import Image from "next/image";
import React from "react";
import CityDetail from "./CityDetail";
import WeatherContainer from "./WeatherContainer";

const CityDetails = ({ cityData }) => {
  const { country, population } = cityData.city;

  const weatherList = cityData.list;

  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  return (
    <div>
      <CityDetail cityDetail={cityData} />
      <WeatherContainer weatherList={weatherList} />
    </div>
  );
};

export default CityDetails;
