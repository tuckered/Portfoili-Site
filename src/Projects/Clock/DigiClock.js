import React from 'react'
import './clock.css'
import AnalogueClock from './AnalogueClock'

export default class DigiClock extends React.Component {

  constructor() {
    super()
    this.state = {
      time: ''
    }
  }

  // addZero = (i) => {
  //   if (i < 10) {
  //     i = "0" + i
  //   }
  //   return i
  // }
  

  // setDigiClock = () => {
  //   let now = new Date()
  //   let hours = now.getHours(0)
  //   let minutes = now.getMinutes(0)
  //   let seconds = now.getSeconds(0)
  //   var time = this.addZero(hours) + ":" + this.addZero(minutes) + ":" + this.addZero(seconds)
  //   console.log(time)
  //   return time
  // }

  render() {
    return <div className="clockContainer">
      {/* {setInterval(this. , 1000)} */}
      <AnalogueClock />
    </div>
  }
}