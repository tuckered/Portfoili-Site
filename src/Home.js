import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
// import Home from './Home'
import App from './App'
import About from './About'
import Projects from './Projects/Projects'
import Music from './Music'
import './home.css'

class Home extends Component {
  render() {
    return (
    <div className="home-container">
      <div className="nav-top">
        <nav className="nav-projects">
          <Link to="/projects">PROJECTS</Link>
        </nav>
      </div>
      <div className="nav-left">
        <nav className="nav-about">
          <Link to="/about">ABOUT</Link>
        </nav>
      </div>
      <div className="nav-right">
        <nav className="nav-music">
        <Link to="/music">MUSIC</Link>
        </nav>
      </div>
      <main className="hero-image">
        <Switch>
          <Route exact path="/music"
            render={() => <Music />} />
          <Route exact path="/about"
            render={() => <About />} />
          <Route exact path="/projects"
            render={() => <Projects />} />
        </Switch>
      </main>
    </div>
    )
  }
}

export default Home;