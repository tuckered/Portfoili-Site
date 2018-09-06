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
    <div className="grid-container">
      <main className="main-section">
        <Switch>
          <Route exact path="/"
            render={() => <Home />} />
          <Route exact path="/about"
            render={() => <About />} />
          <Route exact path="/music"
            render={() => <Music />} />
          <Route path="/projects"
            render={() => <Projects />} />
        </Switch>
        <div className="white-container">
        </div>
      </main>
      <p className="">Thomas Alan Waters</p>
    </div>
    )
  }
}

export default App;
