import React from 'react'
import '../../Pages/Clock/clock.css'

export default class Clock extends React.Component {

  constructor() {
    super()
  }

  addZero = (i) => {
    if (i < 10) {
      i = "0" + i
    };
    return i
  }
  
  getTime = () => {
    let now = new Date()
    let hours = now.getHours(0)
    let minutes = now.getMinutes(0)
    let seconds = now.getSeconds(0)
    var time = this.addZero(hours) + ":" + this.addZero(minutes) + ":" + this.addZero(seconds)
    return time
  }

  render() {
    return <div className="clockContainer">
      <p className="clock-p">{this.getTime()}</p>
    </div>
  }
}