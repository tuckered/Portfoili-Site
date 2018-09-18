import React from 'react'
import axios from 'axios'
// import Forecast from './Forecast'
import './weather.css'

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      description: "",
      temp: "",
      location: "",
      icon: "",
      response: ''
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
        console.log('hi')
        this.setState(() => {
          return {
            description,
            temp,
            location,
            icon,
            loading: false,
            response: true
          }
        })
      })
    })
  }


  weatherCard = () => {
    const city = this.state.location.replace(/^\w/, c => c.toUpperCase());
    const summary = this.state.description.replace(/^\w/, c => c.toUpperCase())
    return (
      <div className="card-weather">
        <p className="card-location">{city}</p>
        <img className="weather-img" src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
        <p className="card-temp">{this.state.temp}°C</p>
        <p className="card-description">{summary}</p>
      </div>
    ) 
  }

  render() {

    return <div className="weather-wrapper">
        <button className="weather-btn" onClick={ this.weather }>Check the weather?</button>
        <div className="weather-container">
          {this.state.response ? <this.weatherCard /> 
          : <p></p>
          } 
      </div>
    </div>
  }
}
