import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import Sketch from './Sketch'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Synth from './Synth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sketch">Test</Link>
          <Link to="/synth">Synth</Link>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" 
              render={ () => <Home /> } />
            <Route exact path="/about" 
              render={ () => <About /> } /> 
            <Route exact path="/sketch" 
              render={ () => <P5Wrapper sketch={Sketch} /> } />
            <Route exact path="/synth"
              render={ () => <Synth /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
