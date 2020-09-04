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
    return /*html */ `<div class="card-body">
    <h6 class="card-title">${this.city}</h6>
    <p class="card-text">${this.fahrenheit} °F</p>
</div>`
  }


}