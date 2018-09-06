import React from 'react'
import Tone from 'tone'
import Particles from '../Particles/Particles'
// import Sketch from './Sketch'
// import Visualise from './Visualise'

export default class Synth extends React.Component {
  
  constructor() {
    super()
    this.basicSynth = this.basicSynth.bind(this)
    this.stopPlaying = this.stopPlaying.bind(this)
    this.reverb= this.reverb.bind(this)
    this.state = {
      synth: []
      
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
        distortion: 10,
        oversample: 'none',
      }
    ).toMaster()

    // var analyser = new Tone.Analyser(
    //   {
    //     size: 1024,
    //     type: 'string',
    //     smoothing: 0.8
    //   }
    // ).toMaster()

    var meter = new Tone.Meter( 
      {
        smoothing: 0.8,
      }
    ).toMaster()
    var level = meter.getLevel()
    // console.log("Level:" + level)

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
      }).chain(dist, verb, meter, Tone.Master)
      
      
      // verb.dispose()
      verb.generate()
      synth.connect(verb)
      synth.connect(dist)
      synth.connect(meter)
      console.log("Level:" + level)


    synth.triggerAttack(event.target.textContent)  
    console.log((this.state.synth.length + 1) + 'start')
    this.setState((prevState) => {
      // debugger
      return { synth: [...prevState.synth, synth] }
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
    }
  }
  

  render() {
    return <div>
    <h1>Synth</h1>
    <div className="btnContainer">
      <button onClick={this.basicSynth}>C2</button>
      <button onClick={this.basicSynth}>C#2</button>
      <button onClick={this.basicSynth}>D2</button>
      <button onClick={this.basicSynth}>D#2</button>
      <button onClick={this.basicSynth}>E2</button>
      <button onClick={this.basicSynth}>F2</button>
      <button onClick={this.basicSynth}>F#2</button>
      <button onClick={this.basicSynth}>G2</button>
      <button onClick={this.basicSynth}>G#2</button>
      <button onClick={this.basicSynth}>A2</button>
      <button onClick={this.basicSynth}>A#2</button>
      <button onClick={this.basicSynth}>B2</button>
    </div>
    <div className="stopBtn">
      <button onClick={this.stopPlaying}>Stop</button>
    </div>
    <div>
    <Particles
        params={
          {
            "particles": {
              "number": {
                "value": 30,
                "density": {
                  "enable": false,
                  "value_area": 0
                }
              },
              "color": {
                "value": ["FFFFFF"],
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
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": true
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 100,
                "color": "#ffffff",
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
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "bubble"
                },
                "resize": true,
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
                  "distance": 400,
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
            "retina_detect": true
          }
        }
        style={
          { width: '100%', }
        }
      />
    </div>
  </div>
  }
}







// basicSynth(event) {
//   let keyBoard = {
//     97: "C3",
//     115: "D4",
//     100: "E4",
//     102: "F4",
//     103: "G4"
//   }
//   var synth = new Tone.MonoSynth(
//     {
//       "oscillator" : {
//         "type" : "sine"
//      },
//      "envelope" : {
//        "attack" : 0.5
//      }
//     }).toMaster()
    
//   if (event.type === 'click') {
//     return synth.triggerAttack(event.target.textContent)
//   } else if (event.type === 'keypress') {
//     return synth.triggerAttack(keyBoard[event.charCode])
//   }

//   synth.triggerRelease()

// }