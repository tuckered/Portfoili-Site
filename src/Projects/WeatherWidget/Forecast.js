import React from 'react'
import axios from 'axios'

export default class Forecast extends React.Component {

  constructor() {
    super()
    this.state = {
      day: []
    }
  }

  forecast = () => {
    var lat, lon
    const day = []
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/forecast?'
    navigator.geolocation.getCurrentPosition((position) => {
      
      lat = position.coords.latitude
      lon = position.coords.longitude

      axios.get(openWeatherMap, {
        params: {
          APPID: '3e077650ab85db2d7eaf9d4efa35e8f2',
          lat: lat,
          lon: lon,
          units: 'metric',
          cnt: '5'
        }
      }).then((response) => {
        debugger
        day.push(
          response.data.city.name, 
          response.data.list[0].dt_txt, 
          response.data.list[0].weather[0].description, 
          response.data.list[0].main.temp.toFixed(0), response.data.list[0].weather[0].icon
          )
        // var location = response.data.city.name
        // var date = response.data.list[0].dt_txt
        // var description = response.data.list[0].weather[0].description
        // var temp = response.data.list[0].main.temp.toFixed(0)
        // var icon = response.data.list[0].weather[0].icon
        // console.log(description)
        // console.log(temp)
        // console.log(location)
        // console.log(icon)
        // console.log(date)
        debugger 

        this.setState((prevState) => {
          return { day: [...prevState.day, day] }
        })
      })
    })
  }

  render() {
    // let day = this.state.day.slice(0,10)

    return <div className="weatherContainer">
      <button className="forecastBtn" onClick={ this.forecast }>Forecast</button>
      {/* <div className="card-weather">
        <p className="card-location">{this.state.location}</p>
        <p className="card-description">{this.state.description}</p>
        <p className="card-temp">{this.state.temp}</p>
        <p className="card-date">{date}</p>
        <img className="weather-img" src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
      </div> */}
    </div>
  }
}
