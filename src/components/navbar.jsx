import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(event) {
    if (!this.state.active) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }

  }

  render() {
    let isActive = null;
    let toggle = null;
    if (this.state.active) {
      isActive = 'nav-active'
      toggle = 'toggle'
    }
    return (
      <div className="#top">
        <div id="header-placeholder">&nbsp;</div>
        <nav id="header-container" className="fixed-top">
          <div className="header d-flex justify-content-between align-items-center m-auto p-2">
            <a href="#top"><h2 className="m-0">SC</h2></a>
            <ul className={`nav-links d-flex align-items-center justify-content-around m-0 ${isActive}`}>
              <li><a href="#top" onClick={this.toggleNav}>Home</a></li>
              <li><a href="#about" onClick={this.toggleNav}>About</a></li>
              <li><a href="#applications" onClick={this.toggleNav}>Applications</a></li>
              <li><a href="#skills" onClick={this.toggleNav}>Skills</a></li>
              <li><a href="#tools" onClick={this.toggleNav}>Tools</a></li>
              <li><a href="#contact" onClick={this.toggleNav}>Contact</a></li>
            </ul>
            <div className="burger" onClick={this.toggleNav} >
              <div className={`${toggle} line1`}></div>
              <div className={`${toggle} line2`}></div>
              <div className={`${toggle} line3`}></div>
            </div>
          </div>
        </nav>
      </div >

    )
  }
}
