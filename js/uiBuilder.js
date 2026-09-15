//Set Data from Promise to Ui Dynamically every load or call
export function uiSetter(weatherdata, locationdata) {
    //declaration
    let maintext = document.getElementById("maintext");    
    let locationtext = document.getElementById("locationtext")
    let iconday = document.getElementById("icon-day");    
    let weatherbg = document.getElementById("weather-bg");    
    // let weatherbgcredit = document.getElementById("weather-bg-credit");
    let tempreal = document.getElementById("temp-real");  
    let tempfeel = document.getElementById("temp-feel");  
    let winddirection = document.getElementById("wind-dir");  
    let windgust = document.getElementById("wind-gust");  
    let windspeed = document.getElementById("wind-speed");  
    let humidity = document.getElementById("humidity");  
    let seapressure = document.getElementById("sea-pressure");  
    let surfacepressure = document.getElementById("surface-pressure");  
    let precipitation = document.getElementById("precipitation");  
    let precipitationtype = document.getElementById("precipitation-type"); 
    let cloud_cover = document.getElementById("cloud-cover");  


    //assignment
    maintext.textContent = weatherdata.ui_data.weather;
    locationtext.textContent = 
        locationdata.city + ", " +
        locationdata.province + ", " + 
        locationdata.country; 

    tempreal.textContent = weatherdata.ui_data.temperature.air_temperature;
    tempfeel.textContent = weatherdata.ui_data.temperature.feel_like_temperature;

    winddirection.textContent = weatherdata.ui_data.wind.wind_direction;
    windgust.textContent = weatherdata.ui_data.wind.wind_gust;
    windspeed.textContent = weatherdata.ui_data.wind.wind_speed;

    humidity.textContent = weatherdata.ui_data.atmosphere.humidity;
    seapressure.textContent = weatherdata.ui_data.atmosphere.sea_level_pressure;
    surfacepressure.textContent = weatherdata.ui_data.atmosphere.surface_pressure;

    precipitation.textContent = weatherdata.ui_data.precipitation.precipitation;
    precipitationtype.textContent = weatherdata.ui_data.precipitation.type;

    cloud_cover.textContent = weatherdata.ui_data.cloud_cover;

    let day = "/resources/svg/day.svg";
    let night = "/resources/svg/night.svg"

    weatherbg.style.backgroundImage = `url("../resources/bg/${weatherdata.ui_data.weather_background}.jpg")`;
    // weatherbgcredit.textContent = weatherdata.ui_data.weather_background_credit

    // weather_background_creit

    iconday.src = (weatherdata.data_temp.data.is_day == 0) ? night : day;
}


export function updateCurrentTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
}