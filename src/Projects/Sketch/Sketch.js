import './sketch.css'
import React from 'react'

export default function Sketch (p) {
  // const lineSize = Math.random() * 25
  const lineSize = 25

  p.setup = function (){
    p.createCanvas(500, 500)
  }
  
  p.draw = function () {
    p.clear()
    p.strokeWeight(4)
    p.stroke('white')
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

  setInterval(p.draw, 5000)
}