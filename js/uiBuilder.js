//Set Data from Promise to Ui Dynamically every load or call
export function uiSetter(weatherdata, locationdata) {
    //declaration
    let maintext = document.getElementById("maintext");    
    let locationtext = document.getElementById("locationtext")
    let iconday = document.getElementById("icon-day");    
    let weatherbg = document.getElementById("weather-bg");    
    let weatherbgcredit = document.getElementById("weather-bg-credit");    


    //assignment
    maintext.textContent = weatherdata.ui_data.weather;
    locationtext.textContent = 
    locationdata.city + ", " +
    locationdata.province + ", " + 
    locationdata.country; 

    let day = "/resources/svg/day.svg";
    let night = "/resources/svg/night.svg"

    weatherbg.style.backgroundImage = `url("../resources/bg/${weatherdata.ui_data.weather_background}.jpg")`;
    weatherbgcredit.textContent = weatherdata.ui_data.weather_background_credit

    // weather_background_creit

    iconday.src = (weatherdata.data_temp.data.is_day == 0) ? night : day;


    
    console.log("im here in builder");
    console.log(weatherdata);
}