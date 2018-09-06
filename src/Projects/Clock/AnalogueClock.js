import React from 'react'
import './clock.css'

export default class Clock extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.setTime()
    this.interval = setInterval(this.setTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  setTime = () => {
    let now = new Date()
    let second = now.getSeconds(0)
    let minute = now.getMinutes(0)
    let hour = now.getHours(0)
    let secondsDegrees = (second/60) * 360 + 90
    let minutesDegrees = (minute/60) * 360 + 90
    let hoursDegrees = (hour/12) * 360 + 90
    this.setState(() => {
      return { secondsDegrees, minutesDegrees, hoursDegrees }
    })
  }
  
  
  render() {
    return <div className="clock-container">
      <div className="clock-face">
        <div className="hourhand" 
          style={{transform: `rotate(${this.state.hoursDegrees}deg)`}}>
        </div>
        <div className="minhand" 
          style={{transform: `rotate(${this.state.minutesDegrees}deg)`}}>
        </div>
        <div className="secondhand" 
          style={{transform: `rotate(${this.state.secondsDegrees}deg)`}}>
        </div>
      </div>
    </div>
  }
}