let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let key = `1af1552f8e1c3987d3ee34f3d055077d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
       

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        
        
    })
    country.value = "";
    city.value = "";
})