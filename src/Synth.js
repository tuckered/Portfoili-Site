import React from 'react'
import Tone from 'tone'

export default class Synth extends React.Component {
  
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      code: '',
      letter: '',
      type: ''
    }
  } 
  
  
  handleChange(event) {
    // var letter = event.target.textContent
    event.persist()
    this.setState( () => {
      // console.log(event.charCode)
      return {code: event.charCode, letter: event.target.textContent, type: event.type}
    })
   
    this.basicSynth()
  }
  
  basicSynth() {
    let keyBoard = {
      97: "C4",
      115: "D4",
      100: "E4",
      102: "F4",
      103: "G4"
    }
    var synth = new Tone.FMSynth().toMaster()
    // console.log(keyBoard[this.state.code])
    // console.log(this.state.code)
    console.log(this.state.type)
    if (this.state.type === 'click') {
      // console.log(event.Type)
      return synth.triggerAttackRelease(this.state.letter, 1)
    } else if (this.state.type === 'keypress') {
      // console.log(event.Type)
      return synth.triggerAttackRelease(keyBoard[this.state.code], 1)
    }
  }

  render() {
    return <div>
    <h1>Synth</h1>
    <button onClick={this.handleChange}>C4</button>
    <button onClick={this.handleChange}>D4</button>
    <button onClick={this.handleChange}>E4</button>
    <button onClick={this.handleChange}>F4</button>
    <button onClick={this.handleChange}>G4</button>
    <input type="text" onKeyPress={this.handleChange}/>
    
  </div>
  }
}