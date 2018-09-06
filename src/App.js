import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Projects from './Projects/Projects'
// import './grid-layout.css'

class App extends Component {
  render() {
    return (
    <div className="grid-container">

      {/* <div className="navtop">
        <nav><Link to="/projects">Projects</Link></nav>
      </div>
      <div className="nav left">
        <nav><Link to="/about">About</Link></nav>
      </div>
      <div className="nav right">
        <nav>Music</nav>
      </div> */}
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/"
            render={() => <Home />} />
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

export default App;
