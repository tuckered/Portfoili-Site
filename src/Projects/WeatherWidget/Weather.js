import React from 'react'
import axios from 'axios'
import Forecast from './Forecast'

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      description: '',
      temp: '',
      location: '',
      icon: "04n"
    }
  }

  weather = () => {
    var lat, lon
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    navigator.geolocation.getCurrentPosition((position) => {
      
      lat = position.coords.latitude
      lon = position.coords.longitude

      axios.get(openWeatherMap, {
        params: {
          APPID: '3e077650ab85db2d7eaf9d4efa35e8f2',
          lat: lat,
          lon: lon,
          units: 'metric'
        }
      }).then((response) => {
        var description = response.data.weather[0].description
        var temp = response.data.main.temp.toFixed(0)
        var location = response.data.name
        var icon = response.data.weather[0].icon

        this.setState(() => {
          return {
            description,
            temp,
            location,
            icon
          }
        })
      })
    })
  }

  render() {
    return <div className="weatherContainer">
      <button className="weatherBtn" onClick={ this.weather }>Today's Weather</button>
      <p>{this.state.location}</p>
      <p>{this.state.description}</p>
      <p>{this.state.temp}</p>
      
      <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
      <Forecast />
    </div>
  }
}
