const apiKey = "fb27df023d428610b76d2ef5cdee5d59";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "flex";
    document.querySelector(".weather").style.display = "none";
  } else {
    let weatherData = await response.json();
    console.log(weatherData);

    document.querySelector(".city").innerHTML = weatherData.name;
    document.querySelector(".weatherSummary").innerHTML = weatherData.weather[0].main;
    document.querySelector(".temp").innerHTML =
      Math.round(weatherData.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      weatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      weatherData.wind.speed + " km/h";

    if (weatherData.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherData.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherData.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherData.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherData.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (weatherData.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    } else if (weatherData.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (weatherData.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/thunderstorm.png";
    } else {
      weatherIcon.src = "images/default.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
