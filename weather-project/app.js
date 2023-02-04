const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "cf0ad2d2ec86893c0bb720d2e71677b5";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      console.log(weatherDescription);
      console.log(icon);

      res.send(
        "<h1>The temperature in " +
          query +
          " is " +
          " degrees Celcius.</h1> <p>The weather is currently " +
          weatherDescription +
          "</p> <img src='http://openweathermap.org/img/w/" +
          icon +
          ".png'>"
      );
    });
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
