// // import React from 'react'

// // export default class Visualise extends React.Component
// export default function Visualise(p) {

//   let numbers = [];
//   let count = 1;
//   let sequence = [];
//   let index = 0;
//   //how long between a new number is generated
//   let newTickEveryMS = 1000
//   let oldTickTime = Date.now()
//   let currStep

//   let scl = 0;
//   let arcs = [];
//   let biggest = 0;
//   let PI = 3.14159265359

//   class Arc {
//     constructor(start, end, dir) {
//       this.start = start;
//       this.end = end;
//       this.dir = dir;
//     }

//     show() {
//       let diameter = p.abs(this.end - this.start);
//       let x = (this.end + this.start) / 2;
//       p.stroke(255);
//       p.strokeWeight(0.5);
//       p.noFill();
//       if (this.dir == 0) {
//         //TOP
//         p.arc(x, 0, diameter, diameter, PI, 0);
//       } else {
//         //BOTTOM
//         p.arc(x, 0, diameter, diameter, 0, PI);
//       }
//     }

//     showPartial() {
//       p.stroke(255);
//       p.strokeWeight(0.5);
//       p.noFill();
//       let diameter = p.abs(this.end - this.start);
//       let x = (this.end + this.start) / 2;


//       if (this.dir == 0) {
//         //TOP
//         if (this.end < this.start) {
//           p.drawLeftTop(x, 0, diameter, currStep)
//         }
//         else {
//           p.drawRightTop(x, 0, diameter, currStep)
//         }
//       } else {
//         //BOTTOM
//         if (this.end < this.start) {
//           p.drawLeftBottom(x, 0, diameter, currStep)
//         }
//         else {
//           p.drawRightBottom(x, 0, diameter, currStep)
//         }
//       }
//     }
//   }

//   var setup = function () {
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.frameRate(30);
//     p.background(0);
//     numbers[index] = true;
//     sequence.push(index);
//   }

//   p.step = function () {
//     let next = index - count;
//     if (next < 0 || numbers[next]) {
//       next = index + count;
//     }
//     numbers[next] = true;
//     sequence.push(next);

//     let a = new Arc(index, next, count % 2);
//     arcs.push(a);
//     index = next;

//     if (index > biggest) {
//       biggest = index;
//     }

//     count++;
//   }


//   p.draw = function () {

//     if (oldTickTime < Date.now()) {
//       p.step()
//       oldTickTime = Date.now() + newTickEveryMS;

//       //when did the new tick start
//       p.start = Date.now()

//       //when is it going to end
//       p.end = p.start + newTickEveryMS
//     }

//     // at what point in the tick are we? map that to radians
//     //                                            v if this is 0 there phantom arcs appearing for a few frames
//     currStep = p.map(p.end - Date.now(), newTickEveryMS, 0, 0.1, PI)

//     p.translate(0, p.height / 2);
//     scl = p.lerp(scl, p.width / (biggest * 1.1), 0.1);
//     p.scale(scl);
//     p.background(0);

//     for (let i = 0; i < arcs.length - 1; i++) {
//       arcs[i].show()
//     }
//     arcs[arcs.length - 1].showPartial()


//     // if (count > windowWidth) {
//     //   noLoop();
//     // }
//   }


//   /**
//    * drawing functions 
//    * naming scheme
//    *  draw[direction it is going on x axis][direction on y axis]()
//   */

//   p.drawRightBottom = function (x, y, diameter, currStep) {
//     p.arc(x, y, diameter, diameter, PI - currStep, PI);
//   }

//   p.drawRightTop = function (x, y, diameter, currStep) {
//     p.arc(x, y, diameter, diameter, PI, currStep - PI);
//   }

//   p.drawLeftBottom = function (x, y, diameter, currStep) {
//     p.arc(x, y, diameter, diameter, 0, currStep);
//   }

//   p.drawLeftTop = function (x, y, diameter, currStep) {
//     p.arc(x, y, diameter, diameter, 0 - currStep, 0);
//   }
// }