import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Projects from './Projects/Projects'
import Music from './Music'
import SimpleSlider from './SimpleSlider'
import Carousel from './Carousel'
import DemoCarousel from './DemoCarousel'
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
        <a href="#ga-projects" className="nav-links">Contact</a>
      </header>
        <section className="parallax">
          <div className="header">
            <h1>Thomas Waters</h1>
            <h3>Full-Stack Developer</h3>
          </div>
          {/* <Switch>
            <Route exact path="/"
              render={() => <Home />} />
            <Route exact path="/about"
              render={() => <About />} />
            <Route exact path="/music"
              render={() => <Music />} />
            <Route path="/projects"
              render={() => <Projects />} />
          </Switch> */}
          
        </section>

        <section className="ga-projects-section" id="ga-projects">
          <h1>General Assembly Projects</h1>
          <h3>These projects were done as part of my course Web Development Immersive course at General Assembly.</h3>
          <nav className="ga-img-section">
            <a href="https://tuckered.github.io/Tic-Tac-Toad/" target="_blank">
              <img className="ga-project-img" src="/images/tic-tac-toad.png" alt=""/>
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
          <h1>React Projects</h1>
          <h3>A collection of projects I did to explore and teach myself React at the same time.</h3>
          <Projects />
        </section>
        {/* <p className="">Thomas Alan Waters</p> */}
      </div>
    )
  }
}

export default App;
