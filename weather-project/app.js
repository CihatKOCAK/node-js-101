const express = require("express");

const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cf0ad2d2ec86893c0bb720d2e71677b5";
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        console.log(temp);
        console.log(weatherDescription);
        console.log(icon);
        });
  });

  res.send("Server up and running!");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
