var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?q=springfield,us&appid=786c31c2219f70a1504435aa6e57c6bc&units=imperial', true );
        
weatherRequest.send();
weatherRequest.onload = function (){
    
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
     var iconcode = weatherInfo.weather[0].icon;
     var icon_path="https://openweathermap.org/img/w/"+ iconcode +".png";
document.getElementById("icon").src= icon_path;
     document.getElementById("description").innerHTML=weatherInfo.weather[0].main; 
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;
    document.getElementById("high").innerHTML=weatherInfo.main.temp_max;
    document.getElementById("low").innerHTML=weatherInfo.main.temp_min; 
     document.getElementById("wind").innerHTML = weatherInfo.wind.speed;
}