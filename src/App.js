import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Synth from './Pages/Synth/Synth'
import Sketch from './Pages/Sketch/Sketch'
import Particles from './Pages/Particles/Particles'
import Visualise from './Pages/Visualise/Visualise'
import TodoList from './Pages/TodoList/TodoList'
import Clock from './Pages/Clock/Clock'
import Weather from './Pages/WeatherWidget/Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sketch">Sketch</Link>
          <Link to="/synth">Synth</Link>
          <Link to="/particles">Particles</Link>
          <Link to="/visualise">Visualise</Link>
          <Link to="/todolist">TodoList</Link>
          <Link to="/clock">Clock</Link>
          <Link to="/weather">Weather</Link>
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
            <Route exact path="/particles"
              render={ () => <Particles /> } />
            <Route exact path="/sketch" 
              render={ () => <P5Wrapper visualise={Visualise} /> } />
            <Route exact path="/todoList"
              render={ () => <TodoList /> } />
            <Route exact path="/clock"
              render={ () => <Clock /> } />
              <Route exact path="/weather"
              render={ () => <Weather /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
