var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=deeffff5d2fa7e2da27e48104defb89a
',true);

weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
} //end of the function