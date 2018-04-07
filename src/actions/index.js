import axios from 'axios';

const API_KEY = 'b95ca9b7f7e1813b4678598c8f9d4cc8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log("called fetchWeather");
  console.log("city", city);
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('request', request);

  return {
    type:FETCH_WEATHER,
    payload:request
  };
}
