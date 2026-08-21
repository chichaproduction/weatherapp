
// class weatherData {
//     constructor(day, temp, temp_char, weather, cloud_cover, wind_direction, humidity){
//         this.day = this.day;
//         this.temp = temp + " " + temp_char;
//         this.weather = weather;
//         this.cloud_cover = cloud_cover;
//         this.wind_direction = wind_direction;
//         this.humidity = wind_direction;
//     }
// }

export let weatherDefinitions = {
    is_day: {
        0: "Night",
        1: "Day"
    },
    temperature: "°C",
    weather_codes:
    {
        //🌤️ Clear / Cloudy
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",

        //🌫️ Fog
        45: "Fog",
        48: "Depositing rime fog",

        //🌦️ Drizzle
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",

        //🌧️ Rain
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",

        //❄️ Snow
        71: "Slight snowfall",
        73: "Moderate snowfall",
        75: "Heavy snowfall",
        77: "Snow grains",
        
        //🌧️ Rain showers
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",

        //🌨️ Snow showers
        85: "Slight snow showers",
        86: "Heavy snow showers",   

        // ⛈️ Thunderstorms
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    },
    cloud_cover: {
        0: "Virtually Clear",
        25: "Mostly Clear",
        50: "Partly Clear",
        75: "Mostly Clear",
        100: "Completely Clear",
    },
    wind_direction: {
        0: "North",
        1: "Northeast",
        2: "East",
        3: "Southeast",
        4: "South",
        5: "Southwest",
        6: "West",
        7: "Northwest",
    },
    // temperature_2m: "Temperature",              //2 meters above the ground
    // relative_humidity_2m: "Humidity",           //2 meters above the ground
    // apparent_temperature: "Feels Like",
    // precipitation: "Precipitation",
    // rain: "Rain",
    // showers: "Showers",
    // snowfall: "Snowfall",
    // cloud_cover: "Cloud Cover",
    // pressure_msl: "Air Pressure",
    // surface_pressure: "Surface Pressure",
    // wind_speed_10m: "Wind Speed",               //10 meters above the ground
    // wind_direction_10m: "Wind Direction",       //10 meters above the ground
    // wind_gusts_10m: "Wind Gusts"                //10 meters above the ground        
}

// let weatherStructure = {

// }


