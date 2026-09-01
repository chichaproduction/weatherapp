
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
        0:  {
                label:"Clear Sky",
                picstr:"clear_sky",
                picstr_night:"clear_sky_night",
                piccredit:"Photo by Min An: https://www.pexels.com/photo/grass-field-under-blue-sky-at-daytime-723995/",
                piccredit_night:"Photo by Felipe Barboza: https://www.pexels.com/photo/moon-in-the-starry-night-sky-11922022/",
            },
        1:  {
                label:"Mainly Clear",
                picstr:"mainly_clear",
                picstr_night:"mainly_clear_night",
                piccredit:"Photo by Thilina Alagiyawanna: https://www.pexels.com/photo/blue-sky-with-white-clouds-23234956/",
                piccredit_night:"Photo by Felipe Barboza: https://www.pexels.com/photo/moon-in-the-starry-night-sky-11922022/",
            },
        2:  {
                label:"Partly cloudy",
                picstr:"partly_cloudy",
                picstr_night:"partly_cloudy_night",
                piccredit:"Photo by jiale MA: https://www.pexels.com/photo/fluffy-cumulus-clouds-in-a-blue-sky-33155277/",
                piccredit_night:"Photo by Fatih Turan: https://www.pexels.com/photo/starry-night-sky-with-dramatic-clouds-33460366/",
            },
        3:  {
                label:"Overcast",
                picstr:"overcast",
                picstr_night:"overcast",
                piccredit:"Photo by Vladimir  Gladkov: https://www.pexels.com/photo/dramatic-overcast-sky-with-dark-clouds-33175900/",
                piccredit_night:"Photo by Zachary DeBottis: https://www.pexels.com/photo/a-black-and-white-photo-of-a-dark-sky-27987357/",
            },

        //🌫️ Fog
        45: {
                label:"Fog",
                picstr:"fog",
                picstr_night:"fog_night",
                piccredit:"Photo by Vladimir  Gladkov: https://www.pexels.com/photo/dramatic-overcast-sky-with-dark-clouds-33175900/",
                piccredit_night:"Photo by Zachary DeBottis: https://www.pexels.com/photo/a-black-and-white-photo-of-a-dark-sky-27987357/",
            },
        48: {
                label:"Depositing rime fog",
                picstr:"depositing_rime_fog",
                picstr_night:"depositing_rime_fog_night",
                piccredit:"Photo by Vladimir  Gladkov: https://www.pexels.com/photo/dramatic-overcast-sky-with-dark-clouds-33175900/",
                piccredit_night:"Photo by Zachary DeBottis: https://www.pexels.com/photo/a-black-and-white-photo-of-a-dark-sky-27987357/",
            },
        //🌦️ Drizzle
        51: {
                label:"Light drizzle",
                picstr:"light_rain",
                picstr_night:"light_rain_night",
                piccredit:"Photo by Nguyễn Hữu Nhã: https://www.pexels.com/photo/rainwater-flowing-from-roof-9586507/",
                piccredit_night:"Photo by Josh Hild: https://www.pexels.com/photo/moody-urban-night-scene-with-umbrella-in-seattle-31195404/",
            },
        53: {
                label:"Moderate drizzle",
                picstr:"moderate_rain",
                picstr_night:"moderate_rain_night",
                piccredit:"Photo by Barış  Karagöz : https://www.pexels.com/photo/rain-over-leaves-16631848/",
                piccredit_night:"Photo by Zeeshaan Shabbir: https://www.pexels.com/photo/cars-on-road-during-night-time-9854856/",
            },
        55: {
                label:"Dense drizzle",
                picstr:"heavy_rain",
                picstr_night:"heavy_rain_night",
                piccredit:"Photo by Kalpesh Patel: https://www.pexels.com/photo/brown-wooden-plank-under-the-rain-5009575/",
                piccredit_night:"Photo by Xuân Thống Trần: https://www.pexels.com/photo/rain-over-street-lamp-at-night-19129175/",
            },
        56: {
                label:"Light freezing drizzle",
                picstr:"light_rain",
                picstr_night:"light_rain_night",
                piccredit:"Photo by Nguyễn Hữu Nhã: https://www.pexels.com/photo/rainwater-flowing-from-roof-9586507/",
                piccredit_night:"Photo by Josh Hild: https://www.pexels.com/photo/moody-urban-night-scene-with-umbrella-in-seattle-31195404/",
            },
        57: {
                label:"Dense freezing drizzle",
                picstr:"heavy_rain",
                picstr_night:"heavy_rain_night",
                piccredit:"Photo by Kalpesh Patel: https://www.pexels.com/photo/brown-wooden-plank-under-the-rain-5009575/",
                piccredit_night:"Photo by Xuân Thống Trần: https://www.pexels.com/photo/rain-over-street-lamp-at-night-19129175/",
            },

        //🌧️ Rain
        61: {
                label:"Slight rain",
                picstr:"light_rain",
                picstr_night:"light_rain_night",
                piccredit:"Photo by Nguyễn Hữu Nhã: https://www.pexels.com/photo/rainwater-flowing-from-roof-9586507/",
                piccredit_night:"Photo by Josh Hild: https://www.pexels.com/photo/moody-urban-night-scene-with-umbrella-in-seattle-31195404/",
            },
        63: {
                label:"Moderate rain",
                picstr:"moderate_rain",
                picstr_night:"moderate_rain_night",
                piccredit:"Photo by Barış  Karagöz : https://www.pexels.com/photo/rain-over-leaves-16631848/",
                piccredit_night:"Photo by Zeeshaan Shabbir: https://www.pexels.com/photo/cars-on-road-during-night-time-9854856/",
            },
        65: {
                label:"Heavy rain",
                picstr:"heavy_rain",
                picstr_night:"heavy_rain_night",
                piccredit:"Photo by Kalpesh Patel: https://www.pexels.com/photo/brown-wooden-plank-under-the-rain-5009575/",
                piccredit_night:"Photo by Xuân Thống Trần: https://www.pexels.com/photo/rain-over-street-lamp-at-night-19129175/",
            },
        66:
            {
                label:"Light freezing rain",
                picstr:"light_rain",
                picstr_night:"light_rain_night",
                piccredit:"Photo by Nguyễn Hữu Nhã: https://www.pexels.com/photo/rainwater-flowing-from-roof-9586507/",
                piccredit_night:"Photo by Josh Hild: https://www.pexels.com/photo/moody-urban-night-scene-with-umbrella-in-seattle-31195404/",
            },
        67: {
                label:"Heavy freezing rain",
                picstr:"heavy_rain",
                picstr_night:"heavy_rain_night",
                piccredit:"Photo by Kalpesh Patel: https://www.pexels.com/photo/brown-wooden-plank-under-the-rain-5009575/",
                piccredit_night:"Photo by Xuân Thống Trần: https://www.pexels.com/photo/rain-over-street-lamp-at-night-19129175/",
            },

        //❄️ Snow
        71: {
                label:"Slight snowfall",
                picstr:"slight_snowfall",
                picstr_night:"slight_snowfall_night",
                piccredit:"Photo by Xavier Cloutier Productions: https://www.pexels.com/photo/snowfall-on-the-background-of-conifer-trees-14603511/",
                piccredit_night:"Photo by Mikkel Kvist: https://www.pexels.com/photo/falling-snow-illuminated-by-lit-street-lamp-15845460/",
            },
        73: {
                label:"Moderate snowfall",
                picstr:"moderate_snowfall",
                picstr_night:"moderate_snowfall_night",
                piccredit:"Photo by Designecologist: https://www.pexels.com/photo/photograph-of-a-road-during-a-snowfall-6310613/",
                piccredit_night:"Photo by studio sol: https://www.pexels.com/photo/serene-winter-night-scene-with-snowfall-35711099/",
            },
        75: {
                label:"Heavy snowfall",
                picstr:"heavy_snowfall",
                picstr_night:"heavy_snowfall_night",
                piccredit:"Photo by travelers_tw: https://www.pexels.com/photo/tranquil-snowy-landscape-with-falling-snowflakes-29826612/",
                piccredit_night:"Photo by Nikita Nikitin: https://www.pexels.com/photo/metal-street-lamp-on-the-street-near-benches-10359535/",
            },
        77: {
                label:"Snow grains",
                picstr:"heavy_snowfall",
                picstr_night:"heavy_snowfall_night",
                piccredit:"Photo by travelers_tw: https://www.pexels.com/photo/tranquil-snowy-landscape-with-falling-snowflakes-29826612/",
                piccredit_night:"Photo by Nikita Nikitin: https://www.pexels.com/photo/metal-street-lamp-on-the-street-near-benches-10359535/",
            },
        
        //🌧️ Rain showers
        80: {
                label:"Slight rain showers",
                picstr:"light_rain",
                picstr_night:"light_rain_night",
                piccredit:"Photo by Nguyễn Hữu Nhã: https://www.pexels.com/photo/rainwater-flowing-from-roof-9586507/",
                piccredit_night:"Photo by Josh Hild: https://www.pexels.com/photo/moody-urban-night-scene-with-umbrella-in-seattle-31195404/",
            },
        81: {
                label:"Moderate rain showers",
                picstr:"moderate_rain",
                picstr_night:"moderate_rain_night",
                piccredit:"Photo by Barış  Karagöz : https://www.pexels.com/photo/rain-over-leaves-16631848/",
                piccredit_night:"Photo by Zeeshaan Shabbir: https://www.pexels.com/photo/cars-on-road-during-night-time-9854856/",
            },
        82: {
                label:"Violent rain showers",
                picstr:"heavy_rain",
                picstr_night:"heavy_rain_night",
                piccredit:"Photo by Kalpesh Patel: https://www.pexels.com/photo/brown-wooden-plank-under-the-rain-5009575/",
                piccredit_night:"Photo by Xuân Thống Trần: https://www.pexels.com/photo/rain-over-street-lamp-at-night-19129175/",
            },

        //🌨️ Snow showers
        85: {
                label:"Slight snow showers",
                picstr:"slight_snowfall",
                picstr_night:"slight_snowfall_night",
                piccredit:"Photo by Xavier Cloutier Productions: https://www.pexels.com/photo/snowfall-on-the-background-of-conifer-trees-14603511/",
                piccredit_night:"Photo by Mikkel Kvist: https://www.pexels.com/photo/falling-snow-illuminated-by-lit-street-lamp-15845460/",
            },
        86: {
                label:"Heavy snow showers",
                picstr:"heavy_snowfall",
                picstr_night:"heavy_snowfall_night",
                piccredit:"Photo by travelers_tw: https://www.pexels.com/photo/tranquil-snowy-landscape-with-falling-snowflakes-29826612/",
                piccredit_night:"Photo by Nikita Nikitin: https://www.pexels.com/photo/metal-street-lamp-on-the-street-near-benches-10359535/",
            },  

        // ⛈️ Thunderstorms
        95: {
                label:"Thunderstorm",
                picstr:"thunderstorm",
                picstr_night:"thunderstorm",
                piccredit:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
                piccredit_night:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
            },
        96: {
                label:"Thunderstorm with slight hail",
                picstr:"thunderstorm",
                picstr_night:"thunderstorm",
                piccredit:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
                piccredit_night:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
            },
        99: {
                label:"Thunderstorm with heavy hail",
                picstr:"thunderstorm",
                picstr_night:"thunderstorm",
                piccredit:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
                piccredit_night:"Photo by Nikolett Emmert: https://www.pexels.com/photo/lightning-in-a-cloudy-sky-9286173/",
            },





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


