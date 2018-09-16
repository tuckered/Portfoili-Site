import React from "react";
import Slider from "react-slick";
import TodoList from './Projects/TodoList/TodoList'
import Sketch from './Projects/Sketch/Sketch'
// import './slick-carousel/slick/slick-theme.css'
// import './slick-carousel/slick/slick.css'



export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <h3><TodoList /></h3>
          </div>
          <div>
            <h3></h3>
          </div>
          <div>
            <h3>Hello</h3>
          </div>
          <div>
            <h3>Hello</h3>
          </div>
          <div>
            <h3>Hello</h3>
          </div>
          <div>
            <h3>Hello</h3>
          </div>
        </Slider>
      </div>
    )
  }
}