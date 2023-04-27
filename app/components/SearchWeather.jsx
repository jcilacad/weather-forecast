"use client";
import LoadingPage from "@/app/loading";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function FullWidthTextField({ getCityData }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    const weather_api = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weather_api}&units=metric`
    );

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 Second

    const weather = await response.json();

    return weather;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalCity = city.trim();

    if (!finalCity || /^\s*$/.test(finalCity)) {
      return;
    }

    const weather = await fetchWeather(finalCity);

    getCityData(weather);
    setLoading(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter city"
          id="fullWidth"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            type={"submit"}
            sx={{ height: "3rem", width: "50%" }}
            fullWidth
          >
            Search
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
