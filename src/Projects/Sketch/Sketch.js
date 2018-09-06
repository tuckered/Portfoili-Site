import './sketch.css'

export default function Sketch (p) {
  const lineSize = 20

  p.setup = function (){
    p.createCanvas(300, 300)
  }
  
  p.draw = function () {
    for (let y = 0; y < 500; y+= lineSize) {
      for (let x = 0; x < 500; x += lineSize) {
        p.drawLine(x, y, lineSize, lineSize)
      }
    }
    p.noLoop()
  }

  p.drawLine = function (x, y, width, height) {
    let leftToRight = Math.random() >= 0.5

    if (leftToRight) {
      p.line(x, y, x + width, y + height)
    } else {
      p.line(x + width, y, x, y + height)
    }
  }
}