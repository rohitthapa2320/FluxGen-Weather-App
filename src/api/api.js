import axios from "axios";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const url = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = 'edccdfa0ed27dd5237c45ac8527d9f52';

export const getData = async (city) => {
  return await axios.get(`${url}?q=${city}&appid=${API_KEY}`);
}