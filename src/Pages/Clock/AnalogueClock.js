import React from 'react'
import '../../Pages/Clock/clock.css'

export default class Clock extends React.Component {

  constructor() {
    super()
    this.state = {
      secondsDegrees: '',
      minutesDegrees: '',
      hoursDegrees: ''
    }
  }

  
  getTime = () => {
    const now = new Date()
    const hours = now.getHours(0)
    const hoursDegrees = ((hours / 60) * 360) + 90
    const minutes = now.getMinutes(0)
    const minutesDegrees = ((minutes / 60) * 360) + 90
    const seconds = now.getSeconds(0)
    const secondsDegrees = ((seconds / 60) * 360) + 90

    this.setState(()=>{
      return {
        hoursDegrees,
        minutesDegrees,
        secondsDegrees,
      }
    })
  }


  render() {
    // event.target.style.textDecoration = 'line-through'
    this.getTime()
    const styles = {
      secondhand: {
        transform: `rotate(${this.secondsDegrees}deg)`,
      },
      minhand: {
        transform: `rotate(${this.minutesDegrees}deg)`,
      },
      hourhand: {
        transform: `rotate(${this.hoursDegrees}deg)`,
      }
    }

    return <div className="clock-container">
      <div className="clock-face">
        <div className="hand hourhand"></div>
        <div className="hand minhand"></div>
        <div className="hand secondhand"></div>
      </div>
    </div>
  }
}