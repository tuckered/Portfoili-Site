import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import Sketch from './Sketch'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Synth from './Synth'
import Particles from './Particles'
import Visualise from './Visualise'
import TodoList from './Pages/TodoList/TodoList'

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
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
