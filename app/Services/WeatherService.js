import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  weatherSwap() {
    var x = document.getElementById("weather-swap");
    if (x.innerHTML === ProxyState.weather.fahrenheit + "°F") {
      x.innerHTML = ProxyState.weather.celcius + "°C";
    } else {
      x.innerHTML = ProxyState.weather.fahrenheit + "°F";
    }
  }


  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    console.log(res);
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;