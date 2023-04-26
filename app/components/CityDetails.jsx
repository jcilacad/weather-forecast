import Image from "next/image";
import React from "react";

const myLoader = ({ src }) => {
  return `https://flagcdn.com/48x36/${src}.png`;
};

const CityDetails = ({ cityData }) => {
  const { country } = cityData.city;

  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  return (
    <div>
      <Image
        loader={myLoader}
        src={country.toLowerCase()}
        width={30}
        height={30}
      />

      {regionNamesInEnglish.of(country)}
    </div>
  );
};

export default CityDetails;
