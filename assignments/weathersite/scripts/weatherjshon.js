var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?q=franklin,us&appid=786c31c2219f70a1504435aa6e57c6bc&units=imperial', true );
        
weatherRequest.send();
weatherRequest.onload = function (){
    
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
     var iconcode = weatherInfo.weather[0].icon;
     var icon_path="https://openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById("weather_icon").src= icon_path;
     document.getElementById("currentDes").innerHTML=weatherInfo.weather[0].main; 
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
document.getElementById("currentHigh").innerHTML=weatherInfo.main.temp_max;
    document.getElementById("currentLow").innerHTML=weatherInfo.main.temp_min; 
     document.getElementById("currentWind").innerHTML = weatherInfo.wind.speed;
}