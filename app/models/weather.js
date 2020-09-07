export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin 

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = (((this.kelvin - 273.15) * 1.8) + 32).toFixed(2)
    this.celcius = (((this.kelvin - 273.15).toFixed(2)))
  }

  get WeatherTemplate() {
    return /*html */ `<div class="card-body d-flex flex-direction-column justify-content-end" onclick="app.weatherController.weatherSwap()"> <h5 class = "card-title" >${this.city}</h5>
    <h5 class="card-text spcpointer ml-3" id = "weather-swap">${this.fahrenheit}°F</h5>
</div>`
  }


}