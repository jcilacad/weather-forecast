import { LandscapeTwoTone } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const myLoader = ({ src }) => {
  return `https://flagcdn.com/48x36/${src}.png`;
};

export default function CityDetail({ cityDetail }) {
  const { city } = cityDetail;
  const {
    coord: { lat, lon },
  } = city;

  const { name, country, population } = city;

  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  return (
    <Box sx={{ minWidth: 275, textAlign: "center", my: 5 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h3" component="div">
              {regionNamesInEnglish.of(country)}{" "}
              <Image
                loader={myLoader}
                src={country.toLowerCase()}
                width={30}
                height={30}
              />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Country
            </Typography>

            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              City
            </Typography>

            <Typography variant="h5" component="div">
              {population}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Population
            </Typography>

            <Typography component="div" variant="body2">
              {bull}Latitiude: {lat} {bull}Longtitude: {lon}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body1">
              Coordinates
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
