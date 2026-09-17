import { weatherDataBuilder } from "./weatherDataBuilder.js"
import { uiSetter } from "./uiBuilder.js"
import { updateCurrentTime } from "./uiBuilder.js"
import { locationDataBuilder } from "./locationDataBuilder.js"

//Main function
async function main(geolocation){

    if(!geolocation){
        geolocation = await getLatLong();                                        //waits the Promise resolves or rejects
    }

    let weatherapidata = await getForecast(geolocation.latitude, geolocation.longitude); 
    let locationapidata = await getLocationData(geolocation.latitude, geolocation.longitude); //waits the Promise resolves or rejects
    let weatherdata = weatherDataBuilder(weatherapidata.current, weatherapidata.current_units);
    let locationdata = locationDataBuilder(locationapidata);
    uiSetter(weatherdata, locationdata);
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
            error => {                     
                                                     //anon func. if error callback is called
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
        `wind_gusts_10m` + 
        `&timezone=auto`;
    
    let res = await fetch(strrequest);
    let resdata = await res.json();
    return resdata;
}

//Request to the API BIG DATA CLOUD
async function getLocationData(latitude, longitude){
    
    let strrequest = await `https://api-bdc.net/data/reverse-geocode?`+
    `latitude=${latitude}&longitude=${longitude}`+
    `&localityLanguage=en` + 
    `&key=bdc_77e995e39bbf42b598d2f8f2b0510f79`;
    
    let res = await fetch(strrequest);
    let resdata = await res.json();
    return resdata;
}

//Request Geo LOc based on text
async function searchLocation(){
    let searchtext = document.getElementById('search-input').value;

    let strrequest = await `https://geocoding-api.open-meteo.com/v1/search?name=${searchtext}&count=10&language=en&format=json`;
    
    let res = await fetch(strrequest);
    let resdata = await res.json();
    return resdata.results;

}

function buildSuggestions(listResult){
    let locsuggestdiv = document.getElementById("loc-suggestion");
    locsuggestdiv.style.color = 'black';
    locsuggestdiv.innerHTML = '';

    listResult.map((value, index)=>{
        let resdiv = document.createElement('div');
        resdiv.className = "col-12 search-selectables";
      
        let locationtext = `${index+1}.` + locationBuilder(value);
    
        resdiv.textContent = locationtext;
        resdiv.id = index;
        resdiv.onclick = selectLocation;

        locsuggestdiv.appendChild(resdiv);
    })
}

function locationBuilder(locdata){
    let descarray = [];
    let loctext = '';
    descarray.push(locdata.name);

    if(locdata.admin3){
        (descarray[descarray.length-1] == locdata.admin3 ) ? null : descarray.push(locdata.admin3);
    }
    if(locdata.admin2){
        (descarray[descarray.length-1] == locdata.admin2 ) ? null : descarray.push(locdata.admin2);
    }
    if(locdata.admin1){
        (descarray[descarray.length-1] == locdata.admin1 ) ? null : descarray.push(locdata.admin1);
    }
    if(locdata.country){
        (descarray[descarray.length-1] == locdata.country ) ? null : descarray.push(locdata.country);
    }

    descarray.map((value, index) => {
        if(index == 0){
            loctext += value;
        }else{
            loctext += ", " + value;
        }
    });

    return loctext;
}

function selectLocation(){
    let locIndex = this.id;
    let locationData = locations[locIndex];

    main({latitude:locationData.latitude, longitude:locationData.longitude});
    closemodal();
}

function clearmodalsuggestion(){
    let locsuggestdiv = document.getElementById("loc-suggestion");
    let searchinput = document.getElementById("search-input");
    locsuggestdiv.style.color = 'black';
    locsuggestdiv.innerHTML = '';
    searchinput.value = '';
}

function closemodal(){
    document.getElementById('myModal').style.display = 'none';
    clearmodalsuggestion();
}



//Initial
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
main(false);
let locations = [];


//Modal functionality
document.getElementById('search-location').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'flex';
    clearmodalsuggestion();
});

//Modal functionality
document.getElementById('about-dev').addEventListener('click', () => {
    document.getElementById('myAboutModal').style.display = 'flex';
});

document.getElementById('modal-close').addEventListener('click', () => {
    closemodal();
});
document.getElementById('modal-close-about').addEventListener('click', () => {
    document.getElementById('myAboutModal').style.display = 'none';
});


//Search Button
document.getElementById('search-button').addEventListener('click', async () => {
    let searchLocData = await searchLocation();
    let locsuggestdiv = document.getElementById("loc-suggestion");
    if(searchLocData){
        if(searchLocData.length >= 1){
            locations = searchLocData;
            buildSuggestions(searchLocData);
        }else{
            locsuggestdiv.textContent = 'NO LOCATION FOUND!';
            locsuggestdiv.style.color = "red";
        }
    }else{
        locsuggestdiv.textContent = 'NO LOCATION FOUND!';
        locsuggestdiv.style.color = "red";
    }
});


// setInterval(main, 20 * 60 * 1000); // 20 minutes, matching your earlier plan
