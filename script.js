var loaction = document.querySelector(".a");
var lat = document.querySelector(".b");
var long = document.querySelector(".c");
var timezone = document.querySelector(".d");
var windspeed = document.querySelector(".e");
var pressure = document.querySelector(".f");
var humidity = document.querySelector(".g");
var windDirection = document.querySelector(".h");
var uv =document.querySelector(".i");
var feelslike = document.querySelector(".j");

function getRequestApi() {
    // const apidata = "https://api.weatherstack.com/current?access_key=8cbec4b7aed04afe583c09d1d3330bf0&query=India"
    const apidata = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Texas?unitGroup=metric&key=86TJW5EZKLLZ6RGYVTPV2LUQH&contentType=json"
    fetch(apidata)
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        console.log(data);
       
        var loactionname = data["address"];
        var Lat = data["latitude"];
        var time = data["timezone"];
        var wind = data["currentConditions"]["windspeed"];
        var pressurevalue = data["currentConditions"]["pressure"];
        var humidityvalue = data["currentConditions"]["humidity"];
        var windDirectionvalue = data["currentConditions"]["winddir"]
        var uvvalue = data["currentConditions"]["uvindex"];
        var feelslikevalue = data["currentConditions"]["feelslike"];
        var longvalue = data["longitude"]
        loaction.innerHTML = `Location: ${loactionname}`
        lat.innerHTML = `Lat: ${Lat}`
        timezone.innerHTML = `Time Zone: ${time}`
        windspeed.innerHTML = `Wind Speed: ${wind}`
        pressure.innerHTML = `Pressure: ${pressurevalue}`
        humidity.innerHTML = `Humidity: ${humidityvalue}`
        windDirection.innerHTML = `Wind Direction: ${windDirectionvalue}`
        uv.innerHTML = `UV Index: ${uvvalue}`
        feelslike.innerHTML = `Feels Like: ${feelslikevalue}`
        long.innerHTML = `Long: ${longvalue}`
    })
}