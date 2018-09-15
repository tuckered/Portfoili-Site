import React from 'react'
import axios from 'axios'

export default class Forecast extends React.Component {

// DAILY DATA IS NOT WORKING IN BROWSER. want to try and set up different components for each element we need. 


  constructor() {
    super()
    this.state = {
      dailyData: []
    }
  }

  forecast = () => {
    var lat, lon
    var darkSkyApi = 'https://api.darksky.net/forecast/'
    navigator.geolocation.getCurrentPosition((position) => {
      
      lat = position.coords.latitude
      lon = position.coords.longitude

      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/517933536017f0bab5f6f66e2a2cfc05/${lat},${lon}?units=auto`).then(
        (response) => {
          // debugger
          console.log(response.data.daily.data[0].summary)
          // const daily = response.data.daily.data
          this.setState({ dailyData: response.data.daily})
        }
      )
    }
  )}
  
        // axios.get(darkSkyApi, {
        //   params: {
        //     key: '517933536017f0bab5f6f66e2a2cfc05',
        //     lat: lat,
        //     lon: lon,
        //   }
        // debugger
        // for (var i = 0; i < 5; i++) {
        //   summary.push(response.data.daily.data[i].summary),
        //   maxTemp.push(response.data.daily.data[i].temperatureMax.toFixed(0)),
        //   minTemp.push(response.data.daily.data[i].temperatureMin.toFixed(0)),
        //   icon.push(response.data.daily.data[i].icon)
        // }
        // debugger 

        // this.setState((response) => {
        //   return { 
        //     response: response
        //     // summary: [...prevState.summary, summary],
        //     // maxTemp: [...prevState.maxTemp, maxTemp],
        //     // minTemp: [...prevState.minTemp, minTemp],
        //     // icon: [...prevState.icon, icon]
        //   }
        // })
      

  // createWeatherCard = () => {
  //   return <div className="wrapper">
  //   <p>{this.dailyData}</p>
  //   {/* {this.state.res.data.daily.data.map(item =>
  //     <div key={item.time} className="card daily-card s-grid direction-column">
  //       <div className="info-wrapper s-grid">
  //         <div className="temp s-block">
  //           <div className="main-temp s-grid direction-column">
  //             <span className="description">{item.summary}</span>
  //             <p className="card-temp">{item.maxTemp}</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="other-info">
  //           <i className={'weatherIcon wi wi-forecast-io-' + item.icon}></i>
  //         </div>
  //       </div>
  //     )} */}
  //   </div>
  // } 
  // {this.response.data.daily.data.map(item => 
  //   <p className="card-description">{item.summary}</p>
  //   <p className="card-temp">{item.maxTemp}</p>
  //   <p className="card-temp">{item.minTemp}</p>
  //   <p className="card-date">{item.icon}</p>)
  // }



  render() {
    // let day = this.state.day.slice(0,10)
    // debugger
    console.log(this.state.dailyData)
    return <div className="weatherContainer">
      <button className="forecastBtn" onClick={ this.forecast }>Forecast</button>
      {/* {this.createWeatherCard()} */}
      
      {/* <p>{this.state.dailyData.data.summary}</p> */}
    </div>
  }
}





// export default class Forecast extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       day: []
//     }
//   }

//   forecast = () => {
//     var lat, lon
//     const day = []
//     var openWeatherMap = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
//     navigator.geolocation.getCurrentPosition((position) => {
      
//       lat = position.coords.latitude
//       lon = position.coords.longitude

//       axios.get(openWeatherMap, {
//         params: {
//           APPID: '3e077650ab85db2d7eaf9d4efa35e8f2',
//           lat: lat,
//           lon: lon,
//           cnt: 5,
//           units: 'metric'
//         }
//       }).then((response) => {
//         debugger
//         day.push(
//           response.data.city.name, 
//           response.data.list[0].dt_txt, 
//           response.data.list[0].weather[0].description, 
//           response.data.list[0].main.temp.toFixed(0), response.data.list[0].weather[0].icon
//           )
//         var location = response.data.city.name
//         var date = response.data.list[0].dt_txt
//         var description = response.data.list[0].weather[0].description
//         var temp = response.data.list[0].main.temp.toFixed(0)
//         var icon = response.data.list[0].weather[0].icon
//         // console.log(description)
//         // console.log(temp)
//         // console.log(location)
//         // console.log(icon)
//         // console.log(date)
//         debugger 

//         this.setState((prevState) => {
//           return { day: [...prevState.day, day] }
//         })
//       })
//     })
//   }

//   render() {
//     // let day = this.state.day.slice(0,10)

//     return <div className="weatherContainer">
//       <button className="forecastBtn" onClick={ this.forecast }>Forecast</button>
//       <div className="card-weather">
//         <p className="card-location">{this.state.location}</p>
//         <p className="card-description">{this.state.description}</p>
//         <p className="card-temp">{this.state.temp}</p>
//         <p className="card-date">{this.date}</p>
//         <img className="weather-img" src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
//       </div>
//     </div>
//   }
// }
