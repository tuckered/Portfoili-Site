import React from 'react'
import Particles from 'react-particles-js'
import './particles.css'

 
export default class Dots extends React.Component {
  

  render() {
    return <div className="particle-wrapper">
      <Particles className = "particles-container"
        params={
          {
            "particles": {
              "number": {
                "value": 50,
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
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 2,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 50,
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
                "speed": 5,
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
                  "enable": true,
                  "mode": "bubble"
                },
                "resize": true,
              },
              "modes": {
                "grab": {
                  "distance": 500,
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
  }
}

// particlesJS("particles-js", {"particles":{"number":{"value":256,"density":{"enable":false,"value_area":0}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"","width":90,"height":870}},"opacity":{"value":0,"random":false,"anim":{"enable":false,"speed":0,"opacity_min":0,"sync":false}},"size":{"value":0,"random":false,"anim":{"enable":true,"speed":0,"size_min":0,"sync":true}},"line_linked":{"enable":true,"distance":100,"color":"#ffffff","opacity":0.03206824121731046,"width":4.649894976510016},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;