import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
 
export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
