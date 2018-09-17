import './sketch.css'
import React from 'react'

export default function Sketch (p) {
  const lineSize = 25
  // const lineSize = Math.random() * 25

  p.setup = function (){
    p.createCanvas(700, 500)
  }
  
  p.draw = function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
    p.clear()
    p.strokeWeight(4)
    p.background(`rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`)
    for (let y = 0; y < 500; y+= lineSize) {
      for (let x = 0; x < 700; x += lineSize) {
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

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  setInterval(p.draw, 250)
}