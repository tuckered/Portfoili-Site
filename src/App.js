import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import P5Wrapper from 'react-p5-wrapper'
import Tone from 'tone'
import Home from './Home'
import About from './About'
import Projects from './Projects/Projects'
import './App.css'

// import './grid-layout.css'

class App extends Component {
  render() {
    return (
    <div className="main-container">
        <header className="header-container" id="header-top">
          <a href="#about" className="nav-links">About</a>
          <a href="#ga-projects" className="nav-links">GA Projects</a>
          <a href="#react-projects" className="nav-links">React Projects</a>
          <a href="#contact" className="nav-links">Contact</a>
        </header>
      <section className="parallax">
        <div className="headers-box">
          <h1 className="landing-h1">Thomas Waters</h1>
          <h3 className="landing-h3">Full-Stack Developer</h3>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="ga-headers-box">
          <h1 className="ga-h1">About Me</h1>
          <h3 className="ga-h3">My name is Thomas. I've spent the last decade working in education and disability and I have now made the transition to web development. I recently completed the Web Immersive Course at General Assembly and you can have a look at the projects <a href="#ga-projects">here.</a> I love learning and creating new things. I love music and film. I love tinkering with things and experimenting.</h3>
        </div>
      </section>

      <div className="parallax2"></div>

      <section className="ga-projects-section" id="ga-projects">
        <div className="ga-headers-box">
          <h1 className="ga-h1">General Assembly Projects</h1>
          <h3 className="ga-h3">Projects completed as part of the Web Development Immersion course at General Assembly.</h3>
        </div>
        <nav className="ga-img-section">
          <a href="https://tuckered.github.io/Tic-Tac-Toad/" target="_blank"></a>
          <div className="tic-tac-toad-img"></div>
          <h1 className="ga-img-header">Tic-Tac-Toad</h1>
          <p className="ga-img-p">A simple browser game of Tic-Tac-Toe written using HTML, CSS and JS.</p>

          <a href="https://mondaymorningmusic.herokuapp.com/" target="_blank"></a>
            <div className="monday-morning-music-img"></div>
            <h1 className="ga-img-header">Monday Morning Music</h1>
            <p className="ga-img-p">A music sharing site where users can log in and share music via YouTube. Users can like and comment on songs they enjoy. All 'liked' songs appear in the user's personalised playlist</p>
          
          <a href="https://social-fretwork.herokuapp.com/" target="_blank"></a>
          <div className="social-fretwork-img"></div>
          <h1 className="ga-img-header">Social-Fretwork</h1>
          <p className="ga-img-p">Do you need music for a party or event? Search a range of artists to see who you like or create a job listing and have the muso contact you.</p>
         
        </nav>
      </section>

      <div className="parallax2"></div>
      
      <section className="react-projects-section" id="react-projects">
        <div className="ga-headers-box">
          <h1 className="ga-h1">React Projects</h1>
          <h3 className="ga-h3">A collection of projects to explore and teach myself React at the same time.</h3>
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

      <footer className="homepage-footer">
        <h3 className="h3-footer">
          <a href="#header-top">Top</a>
        </h3>
        <h3 className="h3-footer">
          <a href="#header-top">About</a>
        </h3>
        <h3 className="h3-footer">
          <a href="#header-top">GA Projects</a>
        </h3>
        <h3 className="h3-footer">
          <a href="#header-top">React Projects</a>
        </h3>
        <p className="p-footer">© Thomas Waters 2018</p>
      </footer>
    </div>
    )
  }
}

export default App;
