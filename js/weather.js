const weather = document.querySelector('.js_weather');

const COORDS = 'coords';
const API_KEY = 'f44797779b7462a164c3e49d062bb7cd';

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((json) => {
      const tem = Math.floor(json.main.temp);
      const place = json.name;
      weather.innerText = `${tem} ℃ @ ${place}`;
    });
}

function saveCoords(myCoords) {
  localStorage.setItem(COORDS, JSON.stringify(myCoords));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const myCoords = {
    latitude,
    longitude,
  };
  saveCoords(myCoords);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geolocation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoord() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoord();
}
init();
