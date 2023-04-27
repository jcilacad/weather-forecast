import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Weather from "./Weather";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function WeatherContainer({ weatherList }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={4}>
        {weatherList.map((weather) => {
          return (
            <Item>
              <Weather weatherData={weather} />
            </Item>
          );
        })}
      </Stack>
    </Box>
  );
}
