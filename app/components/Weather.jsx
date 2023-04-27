import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { default as Typography } from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";

const cityIconLoader = ({ src }) => {
  return `https://openweathermap.org/img/w/${src}.png`;
};

export default function MediaControlCard({ weatherData }) {
  const {
    main: { temp, humidity },
  } = weatherData;
  const {
    wind: { speed },
  } = weatherData;
  const { weather } = weatherData;
  const { dt_txt: time } = weatherData;
  const { icon, description } = weather[0];

  const finalDescription = description.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  return (
    <Card sx={{ display: "flex", position: "relative", borderRadius: "30px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {finalDescription}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Description
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {time}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Date and Time
          </Typography>
        </CardContent>
      </Box>

      <Grid md sx={{ my: "auto", mx: "auto" }}>
        <Image loader={cityIconLoader} height="90" width="100" src={icon} />
        <Typography component="div" variant="h5">
          {temp} °C
        </Typography>
        <Typography component="div">Humidity: {humidity}%</Typography>
        <Typography component="div">Wind: {speed}km/h</Typography>
      </Grid>
    </Card>
  );
}
