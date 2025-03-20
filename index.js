// api key 
const apiKey = "2e781673db344fa545525413f74cb86d";

// api url 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

// fetching data of api 
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        // console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+"⁰C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
     
        // weather icon change according to conditions
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main =="Clear"){
            weatherIcon.src = "images/clear.jpg"
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src = "images/rain.jpg"
        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main =="Clear"){
            weatherIcon.src = "images/clear.jpg"
        }
        // display show 
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

// on click search bar, search bar data will pass into checkweather function.

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});

