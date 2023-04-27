import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Weather from "./Weather";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#82b1ff",
  ...theme.typography.body2,
  padding: theme.spacing(0.3),
  textAlign: "center",
  borderRadius: "30px",
  color: "theme.palette.text.main",
}));

export default function WeatherContainer({ weatherList }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1.5}>
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
