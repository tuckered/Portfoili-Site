import React from 'react'
import Tone from 'tone'
import Keyboard from './Keyboard'

export default class Synth2 extends React.Component {

  constructor() {
    super()
    this.state = {
      attackValue: 50,
      decayValue: 50,
      sustainValue: 50,
      releaseValue: 50,
    }
  }

  newSynth = () => {
    const synth = new Tone.MonoSynth({
      "frequency": 'C4',
      "detune": 0,
			"oscillator" : {
				"type" : "square8"
			},
			"envelope" : {
				"attack" : this.state.attackValue / 50,
				"decay" : this.state.decayValue / 50,
				"sustain" : this.state.sustainValue / 50,
				"release" : this.state.releaseValue / 50,
			},
			"filterEnvelope" : {
				"attack" : 0.001,
				"decay" : 0.7,
				"sustain" : 0.1,
				"release" : 0.8,
				"baseFrequency" : 300,
				"octaves" : 4
			}
    }).toMaster()
    synth.triggerAttackRelease('C4', '2n')
  }

  adsrValues = () => {
   return <div className="adsr-container">
      <p>Attack</p>
      <div className="slider-container">
        <input 
        id="attack-slider" 
        type="range" 
        min="0" max="100" 
        value={this.state.attackValue} 
        onChange={this.handleAttackSliderChange}
        step="1"/>
      </div>
      <p>Decay</p>
      <div className="slider-container">
        <input 
        id="decay-slider" 
        type="range" 
        min="0" max="100" 
        value={this.state.decayValue} 
        onChange={this.handleDecaySliderChange}
        step="1"/>
      </div>
      <p>Sustain</p>
      <div className="slider-container">
        <input 
        id="sustain-slider" 
        type="range" 
        min="0" max="100" 
        value={this.state.sustainValue} 
        onChange={this.handleSustainSliderChange}
        step="1"/>
      </div>
      <p>Release</p>
      <div className="slider-container">
        <input 
        id="release-slider" 
        type="range" 
        min="0" max="100" 
        value={this.state.releaseValue} 
        onChange={this.handleReleaseSliderChange}
        step="1"/>
      </div>
    </div>
  }

  handleAttackSliderChange = (event) => {
    this.setState({ attackValue: event.target.value })
  }
  
  handleDecaySliderChange = (event) => {
    this.setState({ decayValue: event.target.value })
  }

  handleSustainSliderChange = (event) => {
    this.setState({ sustainValue: event.target.value })
  }

  handleReleaseSliderChange = (event) => {
    this.setState({ releaseValue: event.target.value })
  }

  render() {
    return <div className="synth-container">
      <Keyboard />
      <button onClick={this.newSynth}>play me</button>
      <this.adsrValues />
    </div>
  }
}