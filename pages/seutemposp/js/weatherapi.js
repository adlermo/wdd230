const apiURL =
  'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid={{APPKEY}}&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((t) => {
    console.log(t);

    document.getElementById('current-temp').textContent +=
      ' ' + t.weather[0].main + ' ' + t.main.temp + ' °F';

    document.getElementById('humidity').textContent +=
      ' ' + t.main.humidity + '%';

    document.getElementById(
      'maxmin'
    ).textContent += ` ${t.main.temp_max} - ${t.main.temp_min}`;

    document.getElementById('wspeed').textContent +=
      ' ' + t.wind.speed + ' mph';

    const chill =
      35.74 +
      0.6215 * t.main.temp -
      35.75 * (t.wind.speed ^ 0.16) +
      0.4275 * t.main.temp * (t.wind.speed ^ 0.16);

    document.getElementById('chill').textContent += chill
      ? ' ' + chill.toFixed(2)
      : ' n/a';

    const imagesrc =
      'https://openweathermap.org/img/w/' + t.weather[0].icon + '.png';

    const desc = t.weather[0].description;

    // document.getElementById('imagesrc').textContent += '' + imagesrc;
    // document.getElementById('icon').setAttribute('src', imagesrc);
    // document.getElementById('icon').setAttribute('alt', desc);
  })
  .catch((err) => alert(err));

/* 
const res = {
  coord: { lon: -111.8766, lat: 42.0963 },
  weather: [
    { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' },
  ],
  base: 'stations',
  main: {
    temp: 275.79,
    feels_like: 273.14,
    temp_min: 273.62,
    temp_max: 278.87,
    pressure: 1025,
    humidity: 50,
    sea_level: 1025,
    grnd_level: 861,
  },
  visibility: 10000,
  wind: { speed: 2.63, deg: 195, gust: 3.7 },
  clouds: { all: 100 },
  dt: 1637262127,
  sys: {
    type: 2,
    id: 2011307,
    country: 'US',
    sunrise: 1637245314,
    sunset: 1637280236,
  },
  timezone: -25200,
  id: 5604473,
  name: 'Preston',
  cod: 200,
};
 */
