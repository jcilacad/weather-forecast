import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import * as React from "react";

const cityIconLoader = ({ src }) => {
  return `https://openweathermap.org/img/w/${src}.png`;
};

export default function MediaControlCard({ weatherData }) {
  const theme = useTheme();

  const { weather } = weatherData;
  const { dt_txt: time } = weatherData;
  const { icon, description } = weather[0];

  return (
    <Card sx={{ display: "flex", position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {description}
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

      <Image
        loader={cityIconLoader}
        height="160"
        width="140"
        src={icon}
        className="weather-icon"
      />
    </Card>
  );
}
