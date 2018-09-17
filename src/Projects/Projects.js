import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from '../Home'
import './projects.css'
import Synth from './Synth/Synth'
import Sketch from './Sketch/Sketch'
import Particles from './Particles/Particles'
import Visualise from './Visualise/Visualise'
import TodoList from './TodoList/TodoList'
import DigiClock from './Clock/DigiClock'
import Weather from './WeatherWidget/Weather'
import Synth2 from './Synth/synth2'

class Projects extends Component {
  render() {
    return ( 
      <div className="Projects">
        <nav className="projects-nav" >
          <div className="project-link">
            <Link to="/projects/todolist">TodoList</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/sketch">Sketch</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/clock">Clock</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/synth">Synth</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/synth2">Arp</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/particles">Particles</Link>
          </div>
          <div className="project-link">
            <Link to="/projects/weather">Weather</Link>
          </div>
        </nav>
        <main className="project-container" id="project-list">
          <Switch>
            <Route exact path="/projects/sketch" 
              render={ () => <P5Wrapper sketch={Sketch} /> } />
            <Route exact path="/projects/synth"
              render={ () => <Synth /> } />
            <Route exact path="/projects/synth2"
              render={ () => <Synth2 /> } />
            <Route exact path="/projects/particles"
              render={ () => <Particles /> } />
            <Route exact path="/projects/sketch" 
              render={ () => <P5Wrapper visualise={Visualise} /> } />
            <Route exact path="/projects/todoList"
              render={ () => <TodoList /> } />
            <Route exact path="/projects/clock"
              render={ () => <DigiClock /> } />
            <Route exact path="/projects/weather"
              render={ () => <Weather /> } />
          </Switch>
        </main>
      </div>
    )
  }
}    

export default Projects;

    