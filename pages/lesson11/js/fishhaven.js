const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=d21dd0e334529048170784d3f77b3f74&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((t) => {
    document.getElementById("current-temp").textContent +=
      " " + t.weather[0].main + " " + t.main.temp.toFixed(1) + " °F";

    document.getElementById("humidity").textContent +=
      " " + t.main.humidity + "%";

    document.getElementById(
      "maxmin"
    ).textContent += ` ${t.main.temp_max.toFixed(
      1
    )} °F - ${t.main.temp_min.toFixed(1)} °F`;

    document.getElementById("wspeed").textContent +=
      " " + t.wind.speed + " mph";

    const chill =
      35.74 +
      0.6215 * t.main.temp -
      35.75 * (t.wind.speed ^ 0.16) +
      0.4275 * t.main.temp * (t.wind.speed ^ 0.16);

    document.getElementById("chill").textContent += chill
      ? " " + chill.toFixed(2)
      : " n/a";
  })
  .catch((err) => alert(err));

// Creates the 5 day forecast table

const get18Forecast = (list) => {
  return list.filter((e) => e.dt_txt.search("18:00:00") > 0);
};

const forecast5 = () => {
  fetch(apiURL.replace("weather?", "forecast?"))
    .then((response) => response.json())
    .then((t) => {
      t = get18Forecast(t.list);

      console.log(t);

      t.forEach((day, i) => {
        let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        document.getElementById(`day${i}`).textContent =
          week[new Date(day.dt_txt).getDay()];

        const imagesrc =
          "https://openweathermap.org/img/wn/" + day.weather[0].icon + ".png";
        const img = document.createElement("img");
        const p = document.createElement("p");

        img.setAttribute("src", imagesrc);
        img.setAttribute("alt", day.weather[0].description);
        p.textContent = day.main.temp.toFixed(1) + " °F";

        document.getElementById(`fc${i}`).append(img);
        document.getElementById(`fc${i}`).append(p);
      });
    })
    .catch((err) => alert(err));
};

forecast5();
