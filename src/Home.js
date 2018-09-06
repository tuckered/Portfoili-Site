import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
// import Home from './Home'
import App from './App'
import About from './About'
import Projects from './Projects/Projects'
import './home.css'

class Home extends Component {
  render() {
    return (
    <div className="home-container">
      <div className="nav-top">
        <nav className="nav-projects"><Link to="/projects">Projects</Link></nav>
      </div>
      <div className="nav-left">
        <nav className="nav-about"><Link to="/about">About</Link>s</nav>
      </div>
      <div className="nav-right">
        <nav className="nav-music">Music</nav>
      </div>
      <main>
        <Switch>
          {/* <Route exact path="/"
            render={() => <A />} /> */}
          <Route exact path="/about"
            render={() => <About />} />
          <Route path="/projects"
            render={() => <Projects />} />
        </Switch>
      </main>
    </div>
    )
  }
}

export default Home;