import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div  className="container">
            <a className="navbar-brand js-scroll" href="#page-top">
              React Html
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll active" href="#home">
                    Anasayfa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">
                    Hakkımda
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link js-scroll" href="#service">
                    Servisler
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#work">
                    İş
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#blog">
                    Blog
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
