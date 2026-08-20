console.log("asdasdadad");
getForecast();

//Get Location
navigator.geolocation.getCurrentPosition(
    //navigator can give browser info
    position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude, longitude);
    },
    error => {
        console.log("Location permission denied or unavailable.");
    }
);

async function getForecast(){
    let res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
    let resdata = await res.json();
    console.log(resdata);
}




