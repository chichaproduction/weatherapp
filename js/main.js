import { weatherDataBuilder } from "./weatherDataBuilder.js"

//Main function
async function main(){
    let weatherapidata = await getWeatherData();                                        //waits the Promise resolves or rejects
    let weatherdata = weatherDataBuilder(weatherapidata.current, weatherapidata.current_units);
    console.log(weatherdata);
}

//Get weather Data 
async function getWeatherData(){
    let geolocation = await getLatLong();                                           //waits the Promise resolves or rejects
    return await getForecast(geolocation.latitude, geolocation.longitude);
}

//Get Latitude and Longitude from Browser/Client
function getLatLong(){

    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            //navigator can give browser info
            position => {                                                           //anon func. if position callback is called
                resolve({                                                           //call resolve to resolve promise
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            error => {                                                              //anon func. if error callback is called
                console.log("Location permission denied or unavailable.");
                reject(error)                                                       //call error to reject promise
            }
        );
    })
    

    return geoLoc;
}

//Request to the API
async function getForecast(latitude, longitude){
    
    let strrequest = await `https://api.open-meteo.com/v1/forecast?`+
    `latitude=${latitude}&longitude=${longitude}`+
    `&hourly=temperature_2m` + 
    `&current=`+
        `temperature_2m,` +
        `relative_humidity_2m,` +
        `apparent_temperature,` +
        `is_day,` +
        `precipitation,` +
        `rain,showers,` +
        `snowfall,` +
        `weather_code,` +
        `cloud_cover,` +
        `pressure_msl,` +
        `surface_pressure,` +
        `wind_speed_10m,` +
        `wind_direction_10m,` +
        `wind_gusts_10m`;
    
    let res = await fetch(strrequest);
    let resdata = await res.json();
    return resdata;
}

//Initial
main();