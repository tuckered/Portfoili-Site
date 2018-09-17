import React from 'react'
import Tone from 'tone'
// import Particles from '../Particles/Particles'
import './synth.css'
import Particles from 'react-particles-js';

// import Sketch from './Sketch'
// import Visualise from './Visualise'

export default class Synth extends React.Component {
  
  constructor() {
    super()
    this.basicSynth = this.basicSynth.bind(this)
    this.stopPlaying = this.stopPlaying.bind(this)
    this.reverb= this.reverb.bind(this)
    this.state = {
      synth: [],
      frequency: ''
    }
  } 
  
  basicSynth(event) {

    var verb = new Tone.Reverb(
      {
        decay: 5,
        wet: 1
      }
    ).toMaster()

    var dist = new Tone.Distortion(
      {
        distortion: 0.5,
        oversample: 'none',
      }
    ).toMaster()


    var meter = new Tone.Meter( 
      {
        smoothing: 0.8,
      }
    ).toMaster()
    // var level = meter.getLevel()
    // console.log("Level:" + level)

    // var master = new Tone.Master()

    var synth = new Tone.MonoSynth(
      {
        oscillator: {
          type: "sine"
        },
        envelope: {
          attack: 1,
          decay: 0.5,
          sustain: 1,
          release: 1
        },
        filterEnvelope: {
          attack: 1,
          decay: 0.2,
          sustain: 0.5,
          release: 2,
          baseFrequency: 200,
          octaves: 7,
          exponent: 2
        }
      }).chain(dist, verb)
      
    var signal = new Tone.Signal(
      {
        value  : 0 ,
        units  : Tone.Type.Default ,
        convert  : true
      })
    

      verb.dispose()
      verb.generate()
      // synth.connect(verb)
      synth.connect(dist)
      // synth.connect(meter)
      synth.connect(signal)
      // synth.connect(master)

      console.log(signal)



    synth.triggerAttack(event.target.textContent)
    console.log(synth.frequency.value)
    console.log((this.state.synth.length + 1) + 'start')
    this.setState((prevState) => {
      // debugger
      return { synth: [...prevState.synth, synth], frequency: synth.frequency.value }
    })
  }

  reverb() {
    var verb = new Tone.Reverb([2]).toMaster()
  }

  stopPlaying() {
    let {synth} = this.state
    if (synth.length > 0) {
      synth[synth.length - 1].triggerRelease(5)
      this.setState(() => {
        return { synth: synth.slice(0, synth.length-1) }
      })
    } else if (synth.length === 0) {
      this.setState(() =>  {
        return { frequency: 0 }
      })
    }
  }
  
  render() {
    return <div className="synth-container">
      <h1 className="synth-header">Synth</h1>
      <div className="btnContainer">
        <button className="note-button" onClick={this.basicSynth}>C2</button>
        <button className="note-button" onClick={this.basicSynth}>C#2</button>
        <button className="note-button" onClick={this.basicSynth}>C3</button>
        <button className="note-button" onClick={this.basicSynth}>F2</button>
        <button className="note-button" onClick={this.basicSynth}>F3</button>
        <button className="note-button" onClick={this.basicSynth}>F#4</button>
        <button className="note-button" onClick={this.basicSynth}>G3</button>
        <button className="note-button" onClick={this.basicSynth}>G#4</button>
        <button className="note-button" onClick={this.basicSynth}>Ab3</button>
        <button className="note-button" onClick={this.basicSynth}>A#3</button>
        <button className="note-button" onClick={this.basicSynth}>B3</button>
      </div>
      <div className="stopBtn">
        <button className="note-button" onClick={this.stopPlaying}>Stop</button>
    </div>
    <div className="particles-div">
    <Particles className="particles-box"
        params={
          {
            "particles": {
              "number": {
                "value": this.state.frequency,
                "density": {
                  "enable": false,
                  "value_area": 0
                }
              },
              "color": {
                "value": ["#000000"],
              },
              "shape": {
                "type": ["circle"],
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": this.state.frequency / 2,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 150,
                  "size_min": 0.1,
                  "sync": true
                }
              },
              "line_linked": {
                "enable": true,
                "distance": this.state.frequency / 2,
                "color": "#000000",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 10,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": false,
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 10,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 1
                },
                "repulse": {
                  "distance": 100,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          }
        }
        style={
          { color: 'red', }
        }
      />
    </div>
  </div>
  }
}






