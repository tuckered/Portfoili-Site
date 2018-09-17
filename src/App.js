import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Projects from './Projects/Projects'
import Music from './Music'
import './App.css'
// import './grid-layout.css'

class App extends Component {
  render() {
    return (
    <div className="main-container">
      <header className="header-container">
        <a href="#ga-projects" className="nav-links">Projects</a>
        <a href="#react-projects" className="nav-links">React Projects</a>
        <a href="#ga-projects" className="nav-links">Profiles</a>
        <a href="#contact" className="nav-links">Contact</a>
      </header>
        <section className="parallax">
          <div className="headers-box">
            <h1 className="landing-h1">Thomas Waters</h1>
            <h3 className="landing-h3">Full-Stack Developer</h3>
          </div>
        </section>

        <section className="ga-projects-section" id="ga-projects">
        <div className="ga-headers-box">
          <h1 className="ga-h1">General Assembly Projects</h1>
          <h3 className="ga-h3">Projects completed as part of the Web Development Immersion course at General Assembly.</h3>
        </div>
          <nav className="ga-img-section">
            <a href="https://tuckered.github.io/Tic-Tac-Toad/" target="_blank">
              <img className="ga-project-img" src="/images/tic-tac-toad.png" alt=""/>
              <div className="toad-text-picture">
                Tic-Tac-Toad stuff and stuff
              </div>
            </a>
            <a href="https://mondaymorningmusic.herokuapp.com/" target="_blank">
              <img className="ga-project-img" src="/images/mondaymusic.png" alt=""/>
            </a>
            <a href="https://peaceful-eyrie-47803.herokuapp.com/" target="_blank">
              <img className="ga-project-img" src="/images/socialfretwork.png" alt=""/>
            </a>
          </nav>
        </section>

        <div className="parallax2"></div>
        
        <section className="react-projects-section" id="react-projects">
        <div className="ga-headers-box">
          <h1 className="ga-h1">React Projects</h1>
          <h3 className="ga-h3">A collection of projects I did to explore and teach myself React at the same time.</h3>
        </div>
          <Projects />
        </section>

        <div className="parallax2"></div>

        <section className="contact-section">
        <div className="ga-headers-box">
          <h1 className="ga-h1" id="contact">Contact</h1>
          <h3 className="ga-h3"><a href="mailto:thomasalanwaters@gmail.com ">thomasalanwaters@gmail.com</a></h3>
          <h3 className="ga-h3">
            <a href="https://github.com/tuckered" target="_blank">GitHub</a>
          </h3>
          <h3 className="ga-h3">
            <a href="https://www.linkedin.com/in/thomas-waters/" target="_blank">LinkedIn</a>
          </h3>
          
          
        </div>
        </section>
        
      </div>
    )
  }
}

export default App;
