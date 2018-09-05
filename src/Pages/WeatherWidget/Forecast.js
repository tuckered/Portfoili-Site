import React from 'react'
import axios from 'axios'

export default class Forecast extends React.Component {

  constructor() {
    super()
    this.state = {
      date: '',
      description: '',
      temp: '',
      location: '',
      icon: ''
    }
  }

  forecast = () => {
    var lat, lon
    const days = [7, 15, 23, 31, 39]
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/forecast?'
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
        // debugger
        var date = response.data.list[7].dt_txt
        var description = response.data.list[7].weather[0].description
        var temp = response.data.list[7].main.temp.toFixed(0)
        var location = response.data.name
        var icon = response.data.list[7].weather[0].icon
        console.log(description)
        console.log(temp)
        console.log(location)
        console.log(icon)
        console.log(date)
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
    let icon = this.state.icon
    return <div className="weatherContainer">
      <button className="forecastBtn" onClick={ this.forecast }>Forecast</button>
      
      <p>{this.state.location}</p>
      <p>{this.state.description}</p>
      <p>{this.state.temp}</p>
      <p>{this.state.date}</p>
      <img src={`openweathermap.org/img/w/${icon}.png`}></img>
    </div>
  }
}


// response.data.list[7].dt_txt
// response.data.list[7].weather[0].description
// response.data.list[7].weather[0].icon
// response.data.list[7].main.temp