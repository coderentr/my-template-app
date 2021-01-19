import React, { Component } from "react";
import background from "../img/intro-bg.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <div
          id="home"
          className="intro route bg-image"
          style={{ backgroundImage: `url(${background})` }}
         // style="background-image: url(img/intro-bg.jpg)"
        >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">I am Mustafa EREN</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items">
                    CEO DevFolio,Web Developer,Web Designer,Frontend
                    Developer,Graphic Designer
                  </span>
                  <strong className="text-slider"></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
