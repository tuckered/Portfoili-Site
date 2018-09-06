import React from 'react'
import axios from 'axios'

export default class Forecast extends React.Component {

  constructor() {
    super()
    this.state = {
      date: '2018-09-22',
      description: 'scattered cloud',
      temp: '15',
      location: 'northoce',
      icon: "04n"
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
            location,
            date,
            icon
          }
        })
      })
    })
  }

  render() {
    let date = this.state.date.slice(0,10)

    return <div className="weatherContainer">
      <button className="forecastBtn" onClick={ this.forecast }>Forecast</button>
      <div className="card-weather">
        <p className="card-location">{this.state.location}</p>
        <p className="card-description">{this.state.description}</p>
        <p className="card-temp">{this.state.temp}</p>
        <p className="card-date">{date}</p>
        <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
      </div>
    </div>
  }
}
