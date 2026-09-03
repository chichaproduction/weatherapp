import { weatherDataBuilder } from "./weatherDataBuilder.js"
import { uiSetter } from "./uiBuilder.js"
import { locationDataBuilder } from "./locationDataBuilder.js"

//Main function
async function main(){
    let geolocation = await getLatLong();                                           //waits the Promise resolves or rejects
    let weatherapidata = await getForecast(geolocation.latitude, geolocation.longitude);       
    let locationapidata = await getLocationData(geolocation.latitude, geolocation.longitude);                         //waits the Promise resolves or rejects
    let weatherdata = weatherDataBuilder(weatherapidata.current, weatherapidata.current_units);
    let locationdata = locationDataBuilder(locationapidata);
    uiSetter(weatherdata, locationdata);
     console.log(locationdata);
    console.log(weatherdata);
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

//Request to the API OPENMATEO
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

//Request to the API BIG DATAC LOUD
async function getLocationData(latitude, longitude){
    
    let strrequest = await `https://api-bdc.net/data/reverse-geocode?`+
    `latitude=${latitude}&longitude=${longitude}`+
    `&localityLanguage=en` + 
    `&key=bdc_77e995e39bbf42b598d2f8f2b0510f79`;
    
    let res = await fetch(strrequest);
    let resdata = await res.json();
    return resdata;
}

//Initial
main();