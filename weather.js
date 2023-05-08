const $apiKey = "4836f5dde557a41cbfe111489ffeb260";
const $apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const $searchBox = $("#searchInput");
const $searchBtn = $("#searchBtn");
const $weatherIcon = $(".weather-icon");
async function checkWeather(city) {
  const $response = await fetch($apiUrl + city + `&appid=${$apiKey}`);

  if($response.status == 404) {
    $(".error").css("display","block")
    $(".weather").css("display","none")
  }
  let $data = await $response.json();

  console.log($data);

  $("#city1").html($data.name);
  $(".temp").html(Math.round($data.main.temp) + "°c");
  $(".humidity").html($data.main.humidity + "%");
  $(".wind").html($data.wind.speed + "km/h");

  if ($data.weather[0].main == "Clouds") {
    $weatherIcon.attr("src", "images/clouds.png");
  } else if ($data.weather[0].main == "Clear") {
    $weatherIcon.attr("src", "images/clear.png");
  } else if ($data.weather[0].main == "Rain") {
    $weatherIcon.attr("src", "images/rain.png");
  } else if ($data.weather[0].main == "Drizzle") {
    $weatherIcon.attr("src", "images/drizzle.png");
  } else if ($data.weather[0].main == "Mist") {
    $weatherIcon.attr("src", "images/mist.png");
  }

  $(".weather").css("display","block")
  $(".error").css("display","none")
}

$searchBtn.on("click", function () {
  checkWeather($searchBox.val());
});
