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
      frequency: 100,
      isPlaying: true,
      synth: {},
      waveType: "sine"
    }
  }

  newSynth = () => {
    var synth = new Tone.MonoSynth({
      "frequency": 'C4',
      "detune": 0,
			"oscillator" : {
        "type" : this.state.waveType
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
    let pitch = new Tone.Frequency(this.state.frequency)
    pitch.toNote()

    this.setState({ synth: synth })


    synth.triggerAttack(pitch)
    // console.log("1:" + this.state.isPlaying)
    
    // if (this.state.isPlaying === true) {
    //   synth.triggerAttack(pitch)
    //   console.log('true' + this.setState.isPlaying)
    //   this.setState({ isPlaying: false })
    // }
    // else if (this.state.isPlaying === false) {
    //   console.log('false' + this.state.isPlaying)
    //   synth.triggerRelease(0.5)
    //   this.setState({ isPlaying: false })
    // }

    // this.setState({ synth: synth})
  }

  stopSynth = () => {
    // debugger
    this.state.synth.triggerRelease()
    
  }

  frequencyValue = () => {
    return <div className="freq-container">
    <p>Pitch</p>
      <input 
        id="freq-slider" 
        type="range" 
        min="50" max="200" 
        value={this.state.frequency} 
        onChange={this.handleFreqSliderChange}
        step="1"/>
    </div>
  }
  
  handleFreqSliderChange = (event) => {
    this.setState({ frequency: event.target.value })
  }

  waveType = () => {
    return <div className="wave-container">
    <p>Wave-Type</p>
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleWaveChange}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="sawtooth">SawTooth</option>
        </select>
      </form>
    </div>
  }

  handleWaveChange = (event) => {
    console.log(event.target.value)
    this.setState({ waveType: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
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
      {/* <Keyboard /> */}
      <button onClick={this.newSynth}>Play</button>
      <button onClick={this.stopSynth}>Stop</button>
      <this.waveType />
      <this.frequencyValue />
      <this.adsrValues />
    </div>
  }
}