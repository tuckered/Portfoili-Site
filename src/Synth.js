import 'p5/lib/addons/p5.sound'
import 'p5/lib/addons/p5.dom'
import p5 from "p5"

export default function Synth (p) {
  var sineWave
  var squareWave
  
  var button
  // var slider
  var playing = false
  // var waveType = ''
  var volume
  var env
  
  p.setup = function () {
    p.createCanvas(100, 100)
    p.sine()
    p.square()
    volume = new p.Amplitude()
    // button = p.createButton('play/pause')
    // button.mousePressed(p.playEnv)
    // masterVol = createSlider(0, 10, [1], [0])
    // masterVolume(masterVol.value(), [1], [1])
    env = new p.Env()
    env.setADSR(0.5, 0.3, 0.5, 0.5)
    env.setRange(0.8, 0)
  }
  
  
  p.square = function () {
    squareWave = new p.Oscillator()
    squareWave.setType('sine')
    squareWave.start()
    squareWave.freq(440)
    squareWave.amp(env)
    p.squarePitch = p.createSlider(20, 500, 200)
    p.squareVolume = p.createSlider(0, 2, 0.5, 0)
  }
  
  p.draw = function () {
    // sineWave.freq(sinePitch.value())
    sineWave.amp(env)
  
    // squareWave.freq(squarePitch.value())
    squareWave.amp(env)
  
    if (playing) {
      p.background(255, 0, 255)
    } else {
      p.background(51)
    }
  }
  p.playEnv = function () {
    env.play()
  }
}
