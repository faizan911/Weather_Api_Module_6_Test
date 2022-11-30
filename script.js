function getweather() {
  const location = document.getElementById('city').value;
  const token = document.getElementById('Token').value;
  const key = "UVWMTQALQ9BM357GVJ3ZU7846";


  if (location==null || location==''){  
    alert("Please Enter Location");  
    return false;  
  }
  else if(token==null || token==''){
    alert("Please Enter Access Token")
    return false;
  } 
  else if(token.length<25){  
    alert("Access Token must be at least 25 characters long.");  
    return false;  
    }  

  console.log(location);
   var url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${token}&contentType=json`;
 
   
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const location = data.address;
      const lat = data.latitude;
      const long = data.longitude;
      const timezone = data.timezone;
      const windspeed = data.currentConditions.windspeed;
      const pressure = data.currentConditions.pressure;
      const humidity = data.currentConditions.humidity;
      const winddirection = data.currentConditions.winddir;
      const uv_index = data.currentConditions.uvindex;
      const feelslike = data.currentConditions.feelslike;

      document.querySelector(".a1").textContent = location;
      document.querySelector(".a2").textContent = lat;
      document.querySelector(".a3").textContent = long;
      document.querySelector(".a4").textContent = timezone;
      document.querySelector(".a5").textContent = windspeed;
      document.querySelector(".a6").textContent = pressure;
      document.querySelector(".a7").textContent = humidity;
      document.querySelector(".a8").textContent = winddirection;
      document.querySelector(".a9").textContent = uv_index;
      document.querySelector(".a10").textContent = feelslike;
    })
}
