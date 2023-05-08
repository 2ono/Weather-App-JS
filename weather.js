
const $apiKey = "4836f5dde557a41cbfe111489ffeb260";
const $apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const $searchBox = $('#searchInput');
const $searchBtn = $('#searchBtn');

async function checkWeather(city) {
    const $response = await fetch($apiUrl + city + `&appid=${$apiKey}`);
    let $data = await $response.json();
    
    console.log($data);

    $("#city1").html($data.name);
    $('.temp').html(Math.round($data.main.temp) + "°c");
    $('.humidity').html($data.main.humidity + "%");
    $('.wind').html($data.wind.speed + "km/h");

    
}

$searchBtn.on('click', function() {
    checkWeather($searchBox.val());
})


