import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weather = ProxyState.weather
  document.getElementById('weather-info').innerHTML = weather.WeatherTemplate

}


export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
   weatherSwap() {
    try {
      weatherService.weatherSwap()
    } catch (error) {
      console.error(error);
    }
  }
}
