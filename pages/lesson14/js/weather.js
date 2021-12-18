const url =
  "https://api.openweathermap.org/data/2.5/onecall" +
  "?lat=-23.5&lon=-46.7&units=metric" +
  "&appid=d21dd0e334529048170784d3f77b3f74";
// One call url of Sao Paulo

const checkAlert = (response) =>
  response.alert ? response.alert.length > 0 : false;

const createAlert = (alert) => {
  const tag = document.createElement("div");
};

const createCurrentForecast = (current) => {
  const weather = document.getElementById("weather");

  const h1 = document.createElement("h1");
  h1.textContent = `${current.temp.toFixed(1)}° C`;

  // Capitalizing weather condition
  const description = document.createElement("p");
  description.textContent = current.weather[0].description;
  description.style.textTransform = "capitalize";

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${current.humidity}%`;
  humidity.style.textTransform = "capitalize";

  weather.appendChild(h1);
  weather.appendChild(description);
  weather.appendChild(humidity);
};

(async () => {
  console.log("Main function started");

  let response;
  await fetch(url)
    .then((res) => res.json())
    .then((json) => (response = json))
    .catch((err) => console.log(`Deu ruim! ${err}`));
  // Finished call to weather api endpoint

  // Check if there's any alert and create element at the page top with button to close it
  if (checkAlert(response)) createAlert(response.alert);

  //

  // City forecast of 3 days and current temp, condition, humidity
  createCurrentForecast(response.current);

  console.log("Main function finished");
})();
