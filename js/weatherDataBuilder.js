import { weatherDefinitions} from "./weatherDefinitions.js"

export function weatherDataBuilder(data, data_units) {
    let data_temp = {
        data_temp_str: {
            apparent_temperature_str:   data.apparent_temperature + " " + data_units.apparent_temperature,
            cloud_cover_str:            data.cloud_cover + " " + data_units.cloud_cover,
            interval_str:               data.interval + " " + data_units.interval,
            precipitation_str:          data.precipitation + " " + data_units.precipitation,
            pressure_msl_str:           data.pressure_msl + " " + data_units.pressure_msl,
            rain_str:                   data.rain + " " + data_units.rain,
            relative_humidity_2m_str:   data.relative_humidity_2m + " " + data_units.relative_humidity_2m,
            showers_str:                data.showers + " " + data_units.showers,
            snowfall_str:               data.snowfall + " " + data_units.snowfall,
            surface_pressure_str:       data.surface_pressure + " " + data_units.surface_pressure,
            temperature_2m_str:         data.temperature_2m + " " + data_units.temperature_2m,
            time: "2026-08-21T06:30",
            weather_code_str:           data.weather_code + " " + data_units.weather_code,
            wind_direction_10m_str:     data.wind_direction_10m + " " + data_units.wind_direction_10m,
            wind_gusts_10m_str:         data.wind_gusts_10m + " " + data_units.wind_gusts_10m,
            wind_speed_10m_str:         data.wind_speed_10m + " " + data_units.wind_speed_10m,
        },
        data: data,
        data_units: data_units,
    }


    let weatherdefinition = getWeatherDefition("weather_codes", data.weather_code);
    let ui_data = {
            weather: weatherdefinition.label,
            weather_background: (data.is_day == 1) ? weatherdefinition.picstr : weatherdefinition.picstr_night,
            weather_background_credit: (data.is_day == 1) ? weatherdefinition.piccredit : weatherdefinition.piccredit_night,
            is_day: getWeatherDefition("is_day", data.is_day),
            cloud_cover: getWeatherDefition("cloud_cover", data.cloud_cover),
            wind:{
                wind_gust: data_temp.data_temp_str.wind_gusts_10m_str,
                wind_speed: data_temp.data_temp_str.wind_speed_10m_str,
                wind_direction: getWeatherDefition("wind_direction", (Math.round(data.wind_direction_10m / 45) % 8)),
            },
            atmosphere:{
                humidity: data_temp.data_temp_str.relative_humidity_2m_str,
                sea_level_pressure: data_temp.data_temp_str.pressure_msl_str,
                surface_pressure: data_temp.data_temp_str.surface_pressure_str,
            },
            precipitation:{
                /* 
                    any form of water falling from the sky: it's the total, 
                    combined measurement that includes rain, showers, snow, 
                    and hail all added together into one number.
                */
                precipitation: data_temp.data_temp_str.precipitation_str, //total of everything below, combined
                rain: data_temp.data_temp_str.rain_str, //just the rain (long rain)
                showers: data_temp.data_temp_str.showers_str, //just the showers (short burst of rain)
                snowfall: data_temp.data_temp_str.snowfall_str, //just the snowfall
            },
            temperature:{
                air_temperature: data_temp.data_temp_str.temperature_2m_str,              // What it really is
                feel_like_temperature: data_temp.data_temp_str.apparent_temperature_str,  // What it feels in your skin
            },
        }

    let return_data = {
        data_temp: data_temp,
        ui_data: ui_data
    }
    return return_data;
}

function getWeatherDefition(data_list, data_param){
    let return_value = null;
    Object.entries(weatherDefinitions[data_list]).forEach(([key, value]) => {
        if(data_param == key){
            return_value = value;
        }
    });
      console.log(return_value);
    return return_value;
}