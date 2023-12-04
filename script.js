const apiKey= "ae9f79ad1c5df5bd5c1754b1bc0fdf31";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input_box=document.querySelector(".input-field");
let input_button=document.querySelector(".btn");
let weather_icon=document.querySelector(".weather-icon");
let weather_box=document.querySelector(".weather");


async function checkWeather(city){
    const response= await fetch( apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    document.querySelector("#new_city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector("#humidity").innerHTML=data.main.humidity +"%";
    document.querySelector("#wind").innerHTML=data.wind.speed +" km/hr";

    if(data.weather[0].main == "Clouds")
        weather_icon.src="./images/clouds.png";
    else if(data.weather[0].main == "Clear")
        weather_icon.src="./images/clear.png";
    else if(data.weather[0].main == "Rain")
        weather_icon.src="./images/rain.png";
    else if(data.weather[0].main == "Drizzle")
        weather_icon.src="./images/drizzle.png";
    else if(data.weather[0].main == "Mist")
        weather_icon.src="./images/mist.png";

    weather_box.classList.replace("weather","weather-show"); 
    

}



input_box.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkWeather(input_box.value);
    }
  });
input_button.addEventListener("click", ()=>{
    checkWeather(input_box.value);

})