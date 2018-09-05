import React from 'react'
import axios from 'axios'

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      description: '',
      temp: '',
      location: ''
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
        console.log(description)
        console.log(temp)
        console.log(location)
        debugger

        this.setState(() => {
          return {
            description,
            temp,
            location
          }
        })
      })
    })
  }

  render() {

    return <div className="weatherContainer">
      <button className="weatherBtn" onClick={ this.weather }>Search Weather</button>
      
      <p>{this.state.location}</p>
      <p>{this.state.description}</p>
      <p>{this.state.temp}</p>
    </div>
  }
}