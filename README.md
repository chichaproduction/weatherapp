# Weather App

A lightweight, dependency-free weather monitoring app built with vanilla HTML, CSS, and JavaScript. Get real-time weather for your current location, or search for any location worldwide.

Live focus: quick-glance conditions (temperature, wind, humidity, pressure, precipitation, cloud cover) with an emphasis on the kind of at-a-glance monitoring useful during changing or severe weather.

## Features

- 📍 **Automatic geolocation** — detects your current position and shows local weather on load
- 🔍 **Location search** — look up weather for any city or place worldwide, with disambiguation when multiple matches are found
- 🌡️ **Live conditions** — temperature, feels-like, wind speed/gust/direction, humidity, sea-level pressure, precipitation, and cloud cover
- 🕐 **Live clock** — real-time updating local time
- 🔄 **Auto-refresh** — weather data refreshes automatically on an interval
- 📱 **Responsive design** — built mobile-first, with a horizontally scrollable stat-card strip that adapts to any screen size
- ⚡ **No build step, no dependencies** — plain HTML/CSS/JS, no npm, no bundler, no framework

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom flexbox-based layout system, no CSS framework
- **JavaScript (ES Modules)** — vanilla JS, `fetch`-based API calls, `async`/`await`

## Data Sources

| Purpose | Provider |
|---|---|
| Weather forecast | [Open-Meteo](https://open-meteo.com/) |
| Location search (name → coordinates) | [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) |
| Reverse geocoding (coordinates → name) | [BigDataCloud](https://www.bigdatacloud.com/) |

Both APIs are free and require no billing setup. BigDataCloud's reverse-geocoding endpoint is used specifically because Open-Meteo does not offer reverse geocoding.

## Project Structure

```
weatherapp/
├── index.html
├── css/
│   ├── main.css
│   ├── teststyles.css
│   └── animation.css
├── js/
│   ├── main.js
│   ├── weatherDataBuilder.js
│   ├── locationDataBuilder.js
│   └── uiBuilder.js
└── resources/
    └── svg/
```

## Getting Started

### Prerequisites

- Any local web server (nginx, Apache, or a simple static file server). This project uses plain `fetch`/ES modules, which most browsers block from `file://` URLs — a local server is required.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/chichaproduction/weatherapp.git
   ```
2. Serve the project root with your local web server of choice.
3. Open the served URL in your browser and allow location access when prompted (or use the search feature to look up a location manually).

No build step, no `npm install`, no environment variables required.

## Usage

- On first load, the app requests your browser's location permission and displays current conditions for your area.
- Click the search icon to look up weather for a different location by name.
- Weather data refreshes automatically; a manual refresh is not currently required but may be added.

## Roadmap / Possible Future Additions

- Adaptive refresh interval based on current conditions (more frequent updates during active storms)
- Hourly/multi-day forecast view
- Pressure trend indicator (rising/falling) rather than raw hPa value

## Credits

- Weather data: [Open-Meteo](https://open-meteo.com/)
- Location data: [BigDataCloud](https://www.bigdatacloud.com/)
- Background photography: credited in-app per image, sourced from [Pexels](https://www.pexels.com/)

## Author

Built by **chichaproduction**
[GitHub](https://github.com/chichaproduction) · [LinkedIn](#https://www.linkedin.com/in/chichaproduction/)

## License
Specify a license here (e.g., MIT) if you intend for others to reuse this code.