
const apiKey = "34716fcc62e24682b4463203260302";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Enter a city name");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("City not found");
        return;
      }

      document.getElementById("temp").innerText =
        Math.round(data.current.temp_c) + "°C";

      document.getElementById("city").innerText =
        data.location.name;

      document.getElementById("condition").innerText =
        data.current.condition.text;

      document.getElementById("icon").innerText =
        getIcon(data.current.condition.text);

      document.getElementById("date").innerText =
        data.location.localtime.split(" ")[0];
    })
    .catch(() => alert("Error fetching weather"));
}

function getIcon(condition) {
  condition = condition.toLowerCase();

  if (condition.includes("sun")) return "☀️";
  if (condition.includes("cloud")) return "☁️";
  if (condition.includes("rain")) return "🌧️";
  if (condition.includes("snow")) return "❄️";
  if (condition.includes("thunder")) return "⛈️";
  return "🌫️";
}

